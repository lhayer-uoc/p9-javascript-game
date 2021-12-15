$(document).ready(async function () {
  const socket = io();
  setSocketListeners();

  const queryParams = new URLSearchParams(window.location.search);
  const gameId = queryParams.get('game');
  let game = null;
  let playerTurn = 0;

  if (gameId) {
    game = await getGameById(gameId);

    await renderPlayers(game);
    renderBoard();
    renderActionButtons();
    setBackNavigation();
    emitPlayerIn();
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
    const response = await fetch(
      `http://localhost:3000/api/games/${game._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(game),
      }
    );
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
    const response = await fetch(
      `http://localhost:3000/api/rooms/${room._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(room),
      }
    );
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
    $(userContainer).removeClass('hidden');
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
      `[data-user-id=${user._id}] button.user-start-button`
    ).get(0);
    $(startButton).on('click', startGame);
    $(startButton).toggleClass('hidden');

    const endButton = $(
      `[data-user-id=${user._id}] button.user-exit-button`
    ).get(0);
    $(endButton).on('click', endGame);
  }

  async function renderTurn() {
    const turnSpan = $('span#turn').get(0);
    if (turnSpan) {
      const player = await getUser(playerTurn);
      if (player) {
        $(turnSpan).text(player.name);
      }
    }
  }

  // PLAY LOGIC
  function getCellTarget(rowId, colId) {
    return $(`[data-row=${rowId}][data-col=${colId}]`).get(0);
  }

  function getUserColor(user) {
    return user && user.color ? user.color : '#000';
  }

  async function sendNextTurn() {
    const user = getUserFromLocalStorage();
    const turn = await getValidNextTurn();
    if (turn !== user._id) {
      emitTurn(turn);
    } else {
      alert('Juego finalizado');
      endGame();
    }
  }

  async function takeCell(event) {
    const user = getUserFromLocalStorage();
    if (playerTurn === user._id) {
      const cellTarget = event.target;
      const rowId = $(cellTarget).attr('data-row');
      const colId = $(cellTarget).attr('data-col');
      const cell = getCellTarget(rowId, colId);
      const userColor = getUserColor(user);
      $(cell).css('background-color', userColor);
      emitMovement({ rowId, colId, color: userColor });
      sendNextTurn();
    } else {
      alert('Debes esperar tu turno.');
    }
  }

  async function getValidNextTurn(playerId = null) {
    playerId = await getNextTurn(playerId);
    if (!(await isPlayerPlaying(playerId))) {
      return getValidNextTurn(playerId);
    }
    return playerId;
  }

  async function getNextTurn(playerId = null) {
    if (!playerId) {
      const user = getUserFromLocalStorage();
      playerId = user._id;
    }

    const game = await getGameById(gameId);
    if (game) {
      const playerIdx = game.playersData.findIndex(playerData => {
        return playerData.playerId === playerId;
      });

      return playerIdx < game.playersData.length - 1
        ? game.playersData[playerIdx + 1].playerId
        : game.playersData[0].playerId;
    }
    return 0;
  }

  function showExitButton(user) {
    const startButton = $(
      `[data-user-id=${user._id}] button.user-start-button`
    ).get(0);
    $(startButton).toggleClass('hidden');

    const endButton = $(
      `[data-user-id=${user._id}] button.user-exit-button`
    ).get(0);
    $(endButton).toggleClass('hidden');
  }

  async function changePlayerState(user, state) {
    game = await getGameById(gameId);
    const playerData = game.playersData.find(p => p.playerId === user._id);
    playerData.state = state;
  }

  function areAllPlayersReady(game) {
    return !game.playersData.some(pd => pd.state !== 'Listo');
  }

  async function startGame() {
    const user = getUserFromLocalStorage();
    await changePlayerState(user, 'Listo');
    const response = await updateGame(game);
    if (response) {
      showExitButton(user);
    }

    if (areAllPlayersReady(game)) {
      console.log('ha comenzado el juego');
      emitTurn(user._id);
    }
  }

  async function arePlayersPlaying() {
    const game = await getGameById(gameId);
    return game.playersData.some(pdata => pdata.state !== 'Fuera');
  }

  async function endGame() {
    const user = getUserFromLocalStorage();
    await changePlayerState(user, 'Fuera');
    const response = await updateGame(game);
    if (response) {
      if (playerTurn === user._id && (await arePlayersPlaying())) {
        const turn = await getValidNextTurn();
        if (turn !== user._id) {
          emitTurn(turn);
        }
      }
      const rooms = await getRooms();
      const myRoom = rooms.find(r => r.game === game._id);
      if (myRoom) {
        myRoom.users = myRoom.users.filter(userId => userId !== user._id);
        await updateRoom(myRoom);
        emitPlayerOut();
        navigateHome();
      }
    }
  }

  function emitMovement(movement) {
    socket.emit('movement', { gameTargetId: gameId, movement });
  }

  function emitTurn(turn) {
    socket.emit('turn', { gameTargetId: gameId, turn });
  }

  function emitPlayerIn() {
    socket.emit('playerIn');
  }

  function emitPlayerOut() {
    socket.emit('playerOut');
  }

  // NAVIGATION

  function setBackNavigation() {
    const backpathButton = $('#backpath').get(0);
    $(backpathButton).on('click', endGame);
  }

  function navigateHome() {
    window.location.replace('/room-game');
  }

  async function isPlayerPlaying(playerId) {
    const game = await getGameById(gameId);
    if (game) {
      const playerData = game.playersData.find(
        pdata => pdata.playerId === playerId
      );
      return playerData.state !== 'Fuera';
    }
    return false;
  }

  // SOCKET
  function setSocketListeners() {
    socket.on('connect', () => {});

    socket.on('disconnect', () => {
      endGame();
    });

    socket.on('turn', async data => {
      const { gameTargetId, turn } = data;
      if (gameTargetId === gameId) {
        playerTurn = turn;
        renderTurn();
      }
    });

    socket.on('movement', data => {
      const { gameTargetId, movement } = data;
      const { rowId, colId, color } = movement;
      if (gameTargetId === gameId) {
        const cell = getCellTarget(rowId, colId);
        $(cell).css('background-color', color);
      }
    });

    socket.on('playerIn', async () => {
      game = await getGameById(gameId);
      await renderPlayers(game);
    });
  }
});
