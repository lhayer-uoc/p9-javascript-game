$(document).ready(async function () {
  let user = null;

  try {
    user = getUserFromLocalStorage();
  } catch (error) {
    console.log(error);
  }

  if (user) {
    renderHeaderActions(user);
  }

  function renderHeaderActions(user) {
    if (user) {
      const queryParams = new URLSearchParams(window.location.search);
      const gameId = queryParams.get('game');
      $('.user-name-header').append('<span>').text(`Hola ${user.name}`);
      if (!gameId) {
        $('.user-action').append('<span>').text('Salir');
        $('.user-action').on('click', () => {
          localStorage.removeItem('user');
          localStorage.removeItem('favouriteRoom');
          window.location.replace('/login');
        });
      }
    }
  }

  function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
});
