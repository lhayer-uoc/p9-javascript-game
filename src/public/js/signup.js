$(document).ready(function () {
  const fileInput = document.getElementById('formFile');

  const signupForm = document.getElementById('signup-form');

  const inputKey = fileInput.getAttribute('name');

  let myFiles = {};

  let isFilesReady = true;

  fileInput.addEventListener('change', async event => {
    myFiles = {};

    isFilesReady = false;

    const files = event.target.files;

    let filePromise = null;

    if (Object.entries(files).length) {
      filePromise = new Promise((resolve, reject) => {
        // Solo permitimos subir una imagen
        const file = files[0];

        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = function (event) {
          // transformación a base64
          myFiles[inputKey] = `data:${file.type};base64,${btoa(
            event.target.result
          )}`;
          resolve();
        };

        reader.onerror = function (error) {
          reject(error);
        };
      });
    }

    Promise.resolve(filePromise)
      .then(() => {
        isFilesReady = true;
      })
      .catch(error => {
        alert('Error al cargar la imagen');
        console.log(error);
      });
  });

  signupForm.addEventListener('submit', async event => {
    event.preventDefault();

    if (!isFilesReady) {
      alert('Todavía se está procesando la imagen ...');
      return false;
    }

    const formData = new FormData(signupForm);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      color: formData.get('color'),
      image: myFiles[inputKey],
    };

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(
      response => {
        if (response && response.status === 200) {
          window.location.replace('/login');
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
