# P9 - Desarrollo full stack de soluciones web con JavaScript y servicios web

_Este proyecto consiste en desarrollar un juego multijugador, que hace uso de comunicaciones en tiempo real y que consiste en un tablero cuadrado (de 20x20 posiciones, p.e.) con un máximo de cuatro jugadores, donde hay que ir conquistado celdas adyacentes clicando en cada una de ellas. Cada jugador tiene un color asignado que le identifica. El frontend estará desarrollado con JavaScript y utilizará diversas APIs HTML5 y Bootstrap. El Backend está desarrollado en NodeJS y definirá una API REST. Los datos de las puntuaciones se almacenarán en MongoDB, una base de datos NoSQL._

## Comenzando 🚀

_Para realizar este proyecto se ha dividido en 4 Productos que iremos desarrollando._

* _**Producto 1 - Análisis de las arquitecturas web del lado del cliente**_

_Este producto es documentación pura y dura sobre las diversas tecnologias que hay en el mercado en el mudo del desarrollo web, tanto del lado cliente como en el del servidor_

_**Objetivo** Describir las arquitecturas web de lado cliente y del lado servidor, en un contexto full stack JavaScript y analizar los mecanismos de seguimiento y control de un proyecto web._


* _**Producto 2 - Desarrollo de una aplicación para la gestión de usuarios y la selección de la sala de juego**_

_Desarrollo de una aplicación para la gestión de usuarios y la selección de la sala de juego._

_**Objetivo** Desarrollar una aplicación web para gestionar los usuarios y seleccionar salas de juego utilizando para la programación del frontend JS y diversas APIs de HTML5 e implementando el backend con NodeJS._

* _**Producto 3 - Desarrollo de una aplicación para la implementación del videojuego de multijugador en tiempo real**_

_En este producto ampliaremos el producto 2 para desarrollar toda la lógica del juego de conquista de celdas. Se utilizarán comunicaciones asíncronas bidireccionales mediante websockets para conseguir transmitir datos a alta velocidad entre los clientes y el servidor._

_**Objetivo** Programar los componentes de la aplicación que corresponden al juego multijugador de conquista de celdas haciendo uso de ExpressJS y las APIs HTML5 de Websockets y Canvas._

* _**Producto 4 - Creación de una API de servicio web y acceso asíncrono**_

_En este producto ampliaremos el producto 3 para realizar la persistencia de datos en el lado servidor en una base de datos NoSQL. Se modificará la solución anterior para incorporar una API REST para gestionar el registro y selección de sala de juego de los jugadores a la cual se accederá mediante AJAX._


_**Objetivo** Realizar el diseño e implementación de una API REST, su acceso asíncrono mediante AJAX y almacenar los datos de las partidas en MongoDB._

### Requisitos 📋


Para poder realizar todos estos productos vamos a necesitar instalar el siguiente software._

* _Para hacer los Mockup utilizamos la web **Justinmind**._

* _Para trabajar necesitamos un entorno IDE en nuestro caso **Visual Code IDE**._

* _Disponer de **Framework CSS Bootstrap**._

* _Instalar **NodeJS**._

* _Tener cuenta en **Github** para el control de versiones y compartir el trabajo con los compañeros de trabajo._

* _Tener instalado **Framework ExpressJS**._

* _Tener instalado **Websockets Socket.io**._

* _Instalar **MongoDB**._

_Que cosas necesitas para instalar el software y como instalarlas_


### Instalación 🔧

* _Para instalar la herramienta IDE nos dirigimos a la siguiente página: https://visualstudio.microsoft.com/es/downloads/_

```
 Una vez con el IDE instalado podemos instalar casi todo por la terminal.
```

 * _El comando para instalar node es **npm install**. Más adelante cada vez que queramos actualizar el proyecto utilizando este comando lograremos que se actualizen todos los componentes._
 
 * _Para instalar Framework CSS Bootstrap nos iremos a su página web y nos descargamos el paquete: https://getbootstrap.com/docs/4.3/getting-started/download/ ._

* _Para trabajar con Github puedes acceder a todo desde su página web: https://github.com/. También puedes descargarte la aplicación para el escritorio y hacer los updates de manera más sencilla y gráfica: https://desktop.github.com/._

* _Para instalar Framework ExpressJS debemos tener instalado anteriormente Node, se instala con el comando **npm install express** y comprobamos que está guardado en la lista de dependencias._

* _Para instalar socket.io lanzamos en la terminal **npm install socket.io** y también comprobamos que esté guardado en la lista de dependencias._

* _Hay que instalar MongoDB descargando el paquete desde su página oficial: https://www.mongodb.com/try/download/community._

## Documentación ⚙️

_Para la documentación hemos utilizado swagger. Swagger es un framework para generar documentación de APIs RESTful y un sandbox para probar llamadas._

## Control de versiones 📌
_Utilizamos Github https://github.com/lhayer-uoc/p9-javascript-game._

## Autores ✒️

* **Luciano** - lhayer@uoc-edu
* **Iñigo** - iindave@uoc.edu
* **Paula** - pvaqueroa@uoc.edu
* **Victoria** - vpenamo@uoc.edu
