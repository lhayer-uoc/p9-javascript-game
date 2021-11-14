window.onload = function () {
    if (window.sessionStorage != null) {
       //Recuperar claves
       obtener_claves_session();
    }
    if (window.localStorage != null) {
       //Recuperar claves
       obtener_claves_local();
    }
 };
 function borrar_claves_session() {
    sessionStorage.clear();
    obtener_claves_session();
 }
 function obtener_claves_session() {
    if (window.sessionStorage != null) {
       //Recuperar claves y escribirlas en los input correspondientes
       var nombre = sessionStorage.getItem("nombre");
       var nombre_object = document.getElementById("nombre");
       nombre_object.value = nombre;
       var apellidos = sessionStorage.apellidos;
       var apellidos_object = document.getElementById("apellidos");
       apellidos_object.value = apellidos;
       var pagina = sessionStorage["pagina"];
       var pagina_object = document.getElementById("pagina");
       pagina_object.value = pagina;
    }
 }
 
 
 function guardar_claves_session() {
    if (window.sessionStorage != null) {
       //Guardar claves con los valores de los inputs
       var nombre_object = document.getElementById("nombre");
       var nomber = nombre_object.value;
       sessionStorage.setItem("nombre", nombre);
       var apellidos_object = document.getElementById("apellidos");
       var apellidos = apellidos_object.value;
       sessionStorage.apellidos = apellidos;
       var pagina_object = document.getElementById("pagina");
       var pagina = pagina_object.value;
       sessionStorage.setItem("pagina", pagina);
    }
 }
 function borrar_claves_local() {
    localStorage.clear();
    obtener_claves_local();
 }
 function obtener_claves_local() {
    if (window.localStorage != null) {
       //Recuperar claves y escribirlas en los input correspondientes
       var nombre = localStorage.getItem("nombre");
       var nombre_object = document.getElementById("nombre");
       nombre_object.value = nombre;
       var apellidos = localStorage.apellidos;
       var apellidos_object = document.getElementById("apellidos");
       apellidos_object.value = apellidos;
       var pagina = localStorage["pagina"];
       var pagina_object = document.getElementById("pagina");
       pagina_object.value = pagina;
    }
 }
 function guardar_claves_local() {
    if (window.localStorage != null) {
       //Guardar claves con los valores de los inputs
       var nombre_object = document.getElementById("nombre");
       var nomber = nombre_object.value;
       localStorage.setItem("nombre", nombre);
       var apellidos_object = document.getElementById("apellidos");
       var apellidos = apellidos_object.value;
       localStorage.apellidos = apellidos;
       var pagina_object = document.getElementById("pagina");
       var pagina = pagina_object.value;
       localStorage.setItem("pagina", pagina);
    }
 }