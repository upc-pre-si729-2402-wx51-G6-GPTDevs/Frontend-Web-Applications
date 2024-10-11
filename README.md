# Proyecto TaskLinker

## Descripción

Este proyecto es una plataforma web que facilita la conexión entre personas que buscan trabajos temporales y aquellos que necesitan contratar servicios. La aplicación cuenta con tres páginas funcionales:
- **Perfil de Trabajador**
- **Perfil de Empleador**
- **Visualización de Panel de Control**

Además, permite cambiar entre los perfiles de usuario (trabajador y empleador) y acceder al panel de control mediante botones en la interfaz.

---

## Requisitos previos

- Node.js 
- Angular CLI 
- Json Server

## Instalación

Sigue los siguientes pasos para instalar y ejecutar la aplicación en tu entorno local.

Ejecutar `npm install` 

Posteriormente instalar JsonServer para el FakeAPI 

`npm install -g json-server` 

Alzar el json server mediante este comando

`json-server --watch server/db.json` 

Este se iniciará en el siguiente Link: http://localhost:3000

Finalmente para poner en funcionamiento el sitio web, ejecutar:

`ng serve`

# Funcionalidades:

### 1. Perfil de Trabajador
   Esta página muestra los detalles del perfil del trabajador, como su foto, nombre, oficio, ubicación y puntuación. 

### 2. Perfil de Empleador
   En esta página, se visualiza la información del perfil del empleador, similar al perfil de trabajador, con opciones de personalización.

### 3. Panel de Control
   Desde el Panel de Control, se puede visualizar las tareas disponibles para el trabajador, crear nuevas tareas, y gestionar el estado de las tareas.

### 4. Boton "Cambiar Usuario"
  Este botón alterna entre los tipos de usuarios, para ver sus datos personales y registro

### 5. Boton "Ver panel de control"
  Mediante este botón, podremos ver detalles de un trabajador y las acciones previamente realizadas 

