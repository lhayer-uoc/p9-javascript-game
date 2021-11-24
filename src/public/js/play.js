$(document).ready(async function () {
  const socket = io();
  setSocketListeners();

  const queryParams = new URLSearchParams(window.location.search);
  const gameId = queryParams.get('game');
  let game = null;

  if (gameId) {
    game = await getGameById(gameId);

    await renderPlayers(game);
    renderBoard();
    renderActionButtons();
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

  async function updateGame(game) {
    const response = await fetch(`http://localhost:3000/api/games/${game.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(game),
    });
    return response.json();
  }

  async function getRooms() {
    const response = await fetch('http://localhost:3000/api/rooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  }

  async function updateRoom(room) {
    const response = await fetch(`http://localhost:3000/api/rooms/${room.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(room),
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

  function getUserFromLocalStorage() {
    const userStringified = localStorage.getItem('user');
    if (userStringified) {
      return JSON.parse(userStringified);
    }
    return null;
  }

  // RENDER FUNCTIONS

  function showUserContainer(idx, playerData) {
    const userContainer = $(`#player-${idx}`).get(0);
    $(userContainer).attr('data-user-id', playerData.playerId);
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
    showUserContainer(idx, playerData);
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

  function renderActionButtons() {
    const user = getUserFromLocalStorage();
    const startButton = $(
      `[data-user-id=${user.id}] button#user-start-button`
    ).get(0);
    $(startButton).on('click', startGame);
    $(startButton).toggleClass('hidden');

    const endButton = $(
      `[data-user-id=${user.id}] button#user-exit-button`
    ).get(0);
    $(endButton).on('click', endGame);
  }

  function renderPlayerFirstCell(game) {}

  // PLAY LOGIC
  function getCellTarget(rowId, colId) {
    return $(`[data-row=${rowId}][data-col=${colId}]`).get(0);
  }

  function getUserColor() {
    const user = getUserFromLocalStorage();
    return user && user.color ? user.color : '#000';
  }

  function takeCell(event) {
    const cellTarget = event.target;
    const rowId = $(cellTarget).attr('data-row');
    const colId = $(cellTarget).attr('data-col');
    const cell = getCellTarget(rowId, colId);
    const userColor = getUserColor();
    $(cell).css('background-color', userColor);
  }

  function showExitButton(user) {
    const startButton = $(
      `[data-user-id=${user.id}] button#user-start-button`
    ).get(0);
    $(startButton).toggleClass('hidden');

    const endButton = $(
      `[data-user-id=${user.id}] button#user-exit-button`
    ).get(0);
    $(endButton).toggleClass('hidden');
  }

  function changePlayerState(user, state) {
    const playerData = game.playersData.find(p => p.playerId === user.id);
    playerData.state = state;
  }

  function areAllPlayersReady(game) {
    return !game.playersData.some(pd => pd.state !== 'Listo');
  }

  async function startGame() {
    const user = getUserFromLocalStorage();
    changePlayerState(user, 'Listo');
    const response = await updateGame(game);
    if (response) {
      game = response;
      showExitButton(user);
    }

    if (areAllPlayersReady(game)) {
      alert('Ha comenzado el juego!!!');
    }
  }

  async function endGame() {
    const user = getUserFromLocalStorage();
    changePlayerState(user, 'Fuera');
    const response = await updateGame(game);
    if (response) {
      game = response;
      // TODO: SI ES MI TURNO ... PASAR
      const rooms = await getRooms();
      const myRoom = rooms.find(r => r.game === game.id);
      if (myRoom) {
        myRoom.users = myRoom.users.filter(userId => userId !== user.id);
        await updateRoom(myRoom);
        navigateHome();
      }
    }
  }

  // NAVIGATION

  function setBackNavigation() {
    const backpathButton = $('#backpath').get(0);
    $(backpathButton).on('click', endGame);
  }

  function navigateHome() {
    window.location.replace('/room-game');
  }

  // SOCKET
  function setSocketListeners() {
    socket.on('connect', () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on('disconnect', () => {
      console.log(socket.id); // undefined
    });

    socket.on('hello', arg => {
      console.log(arg);
    });
  }
});
