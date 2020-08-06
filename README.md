# angular-planetas
Proyecto en Angular con conexión REST a Spring Boot para un listado y detalle de planetas y sus residentes.

Vista previa en GitHub Pages [aquí](https://jsovalles.github.io/angular-planetas/planetas)

## Instalación/Despliegue

Se descarga el proyecto desde GitHub y después se realiza los siguientes comandos
```
ng build

ng serve -o
```
Después de que el comando termine de desplegar automáticamente se abre la página en el navegador determinado 

## Despliegue en GitHub Pages
```
ng add angular-cli-ghpages

ng build

ng deploy --base-href=https://jsovalles.github.io/angular-planetas/
```

## Descripción del proyecto

Se requiere construir una aplicación que le permita al usuario identificar los planetas y personas registrados en la base de datos, y la relación que hay entre sí (Modelo relacional),para efectos de estadísticas y control, teniendo en consideración las siguientes características:

- Un planeta puede ser habitado por muchas personas.
- Una persona solamente puede habitar un planeta a la vez.
- Tanto los planetas como las personas, deben contar con un campo “contador”, para conocer la cantidad de visitas de cada registro.

La aplicación debe contemplar los siguientes características / funcionalidades:

Menú de navegación, para ingresar a la sección de **personas**

- En esta sección, se deben listar todas las personas registradas en el sistema,indicando los nombres y la cantidad de visitas que ha tenido cada registro,así como el planeta al que pertenece la persona. Se debe contar con unavista “Detail”, para acceder al detalle de la persona (Info como: edad, altura,peso, género, fecha de nacimiento, y demás información que el candidato considere pertinente incluir)

- Al ingresar al detalle de una persona, se debe actualizar el contador “Cantidad de visitas” asociado a cada registro. (Este valor debeactualizarse de forma automática en la tabla / listado de datos - front, en labase de datos - back).○ Debe haber una sección en la que se pueda apreciar el TOP 3 de losplanetas con más clicks.

Menú de navegación, para ingresar a la sección de **planetas**
- En esta sección, se deben listar todos los planetas registrados en el sistemaindicando los nombres y la cantidad de personas que habitan el planeta. Sdebe contar con una vista “Detail”, para acceder a la información asociada aplaneta tal como: Periodo de rotación, diámetro, clima, terreno, y demáinformación que el candidato considere pertinente
- [Bonus / Opcional] Adicional a esto, se debe mostrar dentro del detalle, elistado de personas que habitan dicho planeta, indicando los nombres dcada persona (Vista lite). Este listado no requerirá ningún botón de acciósobre los registros (Tabla netamente informativa).
- Al ingresar al detalle de un planeta, se debe actualizar el contador ​“Cantidadde visitas” ​asociado a cada registro. (Este valor debe actualizarse de formaautomática en la tabla / listado de datos - front, en la base de datos - back).Debe haber una sección en la que se pueda apreciar el TOP 3 de losplanetas con más clicks.

Reglas para la actualización de los contadores

- Si el usuario ingresa al detalle de una **persona**, debe aumentar un contador sobre lapersona. Adicional a esto, se deberá aumentar en 1 el contador del planeta al quepertenece la persona.
- Si el usuario ingresa al detalle de un **planeta**, debe aumentar el contador sobre elplaneta únicamente.


## Desarrollado en

* [Angular](https://angular.io/s) - Front-End Framework
* TypeScript, JavaScript, HTML5 y CSS
