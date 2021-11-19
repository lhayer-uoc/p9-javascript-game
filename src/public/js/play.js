$(document).ready(async function () {
  const queryParams = new URLSearchParams(window.location.search);
  const gameId = queryParams.get('game');
  if (gameId) {
    const game = await getGameById(gameId);
    console.log(game);

    renderPlayers(game);
    renderBoard();
    renderPlayerFirstCell(game);
    setBackNavigation();
  }

  // FETCH FUNCTIONS
  async function getGameById(id) {
    const response = await fetch(`http://localhost:3000/api/games/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  }

  async function getUser(id) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  }

  // RENDER FUNCTIONS

  function showUserContainer(idx) {
    const userContainer = $(`#player-${idx}`).get(0);
    $(userContainer).toggleClass('hidden');
  }

  function paintUserLogo(image, idx) {
    const imageList = document.querySelectorAll(`#player-${idx} .user-logo`);

    if (imageList.length) {
      const imageElement = imageList[0];
      imageElement.setAttribute('src', image);
    }
  }

  function paintUserColor(color, idx) {
    const imageContainers = document.querySelectorAll(
      `#player-${idx} .user-logo`
    );

    if (imageContainers.length) {
      const container = imageContainers[0];
      $(container).css('-webkit-box-shadow', `0px 0px 1px 8px ${color}`);
      $(container).css('-moz-box-shadow', `0px 0px 1px 8px ${color}`);
      $(container).css('box-shadow', `0px 0px 1px 8px ${color}`);
    }
  }

  function paintUserName(name, idx) {
    const userSpans = document.querySelectorAll(`#player-${idx} .user-name`);
    if (userSpans.length) {
      const spanElement = userSpans[0];
      spanElement.textContent = name;
    }
  }

  function paintUserPoints(points, idx) {
    const userSpans = document.querySelectorAll(`#player-${idx} .user-points`);
    if (userSpans.length) {
      const spanElement = userSpans[0];
      spanElement.textContent = points;
    }
  }

  function renderUser(user, playerData, idx) {
    showUserContainer(idx);
    paintUserLogo(user.image, idx);
    paintUserName(user.name, idx);
    paintUserColor(user.color, idx);
    paintUserPoints(playerData.points, idx);
  }

  async function renderPlayers(game) {
    if (game && game.playersData && game.playersData.length) {
      let idx = 1;
      for (const playerData of game.playersData) {
        const user = await getUser(playerData.playerId);
        renderUser(user, playerData, idx);
        idx++;
      }
    }
  }

  function createBoardRow() {
    return $('<div>', { class: 'flex flex-rows board-row' });
  }

  function createBoardCell(i, j) {
    return $('<div>', {
      class: 'flex flex-rows board-cell',
      'data-row': i,
      'data-col': j,
    });
  }

  function renderBoard() {
    const board = $('#game-board').get(0);
    $(board).on('click', takeCell);
    for (let i = 0; i < 20; i++) {
      const row = createBoardRow();
      $(row).appendTo(board);
      for (let j = 0; j < 20; j++) {
        const cell = createBoardCell(i, j);
        $(cell).appendTo(row);
      }
    }
  }

  function renderPlayerFirstCell(game) {}

  // PLAY LOGIC
  function getCellTarget(rowId, colId) {
    return $(`[data-row=${rowId}][data-col=${colId}]`).get(0);
  }

  function getUserColor() {
    const userStringified = localStorage.getItem('user');
    if (userStringified) {
      const user = JSON.parse(userStringified);
      return user.color ? user.color : '#000';
    }
  }

  function takeCell(event) {
    const cellTarget = event.target;
    const rowId = $(cellTarget).attr('data-row');
    const colId = $(cellTarget).attr('data-col');
    const cell = getCellTarget(rowId, colId);
    const userColor = getUserColor();
    $(cell).css('background-color', userColor);
  }

  // NAVIGATION

  function setBackNavigation() {
    const backpathButton = $('#backpath').get(0);
    $(backpathButton).on('click', navigateHome);
  }

  function navigateHome() {
    window.location.replace('/room-game');
  }
});
