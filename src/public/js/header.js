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
      $('.user-name-header').append('<span>').text(`Hola ${user.name}`);
      $('.user-action').append('<span>').text('Salir');
      $('.user-action').on('click', () => {
        localStorage.removeItem('user');
        localStorage.removeItem('favouriteRoom');
        window.location.replace('/login');
      });
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
