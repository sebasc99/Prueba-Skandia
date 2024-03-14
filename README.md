## Prueba Skandia
Este proyecto ha sido desarrollado utilizando Angular CLI versión 17.2.3.

## Ejecución del Servidor
Para ejecutar el proyecto, simplemente use el comando `ng serve`. Luego, puede navegar a http://localhost:4200/ en su navegador. La aplicación se recargará automáticamente cada vez que se realice una modificación en algún archivo.

## Construcción
Si desea construir el proyecto, ejecute `ng build`. Todos los archivos resultantes se almacenarán en el directorio dist/.

## Pruebas Unitarias
Para ejecutar las pruebas unitarias utilizando Karma, utilice el comando `ng test`.

## Arquitectura del Proyecto
Dentro del directorio src, encontrará los siguientes directorios:

* app:
    - components: Contiene los componentes globales como el drawer, footer, navbar y sidebar.
    - models: Contiene los modelos correspondientes a las respuestas del API.
    - services\api: Aquí se encuentran los servicios dedicados para realizar solicitudes HTTP.

Los archivos dentro del directorio app contienen el esquema general de la aplicación.

* assets:
    - ico: Contiene los iconos necesarios para el diseño de la aplicación.

* environments: Este directorio contiene el archivo donde se declara el endpoint del API que se va a consumir.

Este README.md proporciona una visión general del proyecto y guía sobre cómo ejecutar, construir y probar la aplicación.