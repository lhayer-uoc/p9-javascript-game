$(document).ready(function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(loginForm);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(
      async response => {
        if (response && response.status === 200) {
          const body = await response.json();
          localStorage.setItem('user', JSON.stringify(body));
          window.location.replace('/room-game');
        } else {
          alert('Error al enviar el formulario');
        }
      },
      error => {
        console.log('ERROR', error);
        alert('Error al enviar el formulario');
      }
    );
  });
});
