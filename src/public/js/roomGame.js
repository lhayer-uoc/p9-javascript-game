$(document).ready(async function () {
  let user = null;
  let rooms = [];

  try {
    user = await getUser(1);
    rooms = await getRooms(1);
  } catch (error) {
    console.log(error);
    alert('Error al solicitar los datos del usuario');
    return;
  }

  if (user) {
    renderUser(user);
  }

  if (rooms && rooms.length) {
    renderRooms(rooms);
  }
});

// GET DATA FUNCTIONS

async function getUser(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response.json();
}

async function getRooms() {
  const response = await fetch('http://localhost:3000/rooms', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response.json();
}

// RENDER FUNCTIONS

function renderUser(user) {
  paintUserLogo(user);
  paintUserName(user);
}

function renderRooms(rooms) {
  rooms.forEach(room => {
    const row = getRowSection();
    row.on('dragenter', handleDragEnter);
    row.on('dragleave', handleDragLeave);
    // row.addEventListener('dragend', handleDragEnd);
    row.on('dragdrop', handleDrop);
    const nameSection = getRoomNameSection(room);
    row.append(nameSection);
    const playerSection = getRoomPlayersSection(room);
    row.append(playerSection);
    const stateSection = getRoomStateSection(room);
    row.append(stateSection);

    $(row).appendTo('.rooms-container');
  });
}

// PAINT FUNCTIONS

function paintUserLogo(user) {
  const imageList = document.querySelectorAll('.user-logo');

  if (imageList.length) {
    const imageElement = imageList[0];
    imageElement.setAttribute('src', user.image);
    imageElement.addEventListener('dragstart', handleImageDragStart);
    imageElement.addEventListener('dragend', handleImageDragStop);
  }
}

function paintUserName(user) {
  const userSpans = document.querySelectorAll('.user-name');
  if (userSpans.length) {
    const spanElement = userSpans[0];
    spanElement.textContent = user.name;
  }
}

function getRowSection() {
  return $('<div>', { class: 'row draggable' });
}

function getRoomNameSection(room) {
  const $div = $('<div>', { class: 'col-4' }).append('<span>').text(room.name);
  return $div;
}

function getRoomPlayersSection(room) {
  return $('<div>', { class: 'col-4' });
}

function getRoomStateSection(room) {
  const $div = $('<div>', { class: 'col-4' });
  return $div.append('<span>').text(room.state);
}

// EVENTS INTERACTIONS

function handleImageDragStart(e) {
  this.style.opacity = '0.4';
}

function handleImageDragStop(e) {
  this.style.opacity = '1';
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  this.classList.remove('over');
  // Add user to room
  // Save favorite room
  // Start game
}
