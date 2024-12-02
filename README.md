# Repaso Examen: Conversión de Aplicación de Clima a React

## Introducción

El objetivo de este proyecto es tomar una aplicación existente de consulta de clima basada en **HTML, CSS y JavaScript** y convertirla a **React**, empleando las mejores prácticas y patrones de diseño de esta librería. Durante el proceso, utilizarán varios hooks y herramientas clave de React, como `useState`, `useEffect`, `react-router`, `useNavigate`, `useContext`, y **Custom Hooks**.

## Requerimientos Técnicos

La conversión debe implementar lo siguiente:

- **useState**: Para manejar el estado de la ciudad seleccionada, el historial de consultas, y otros datos relevantes.
- **useEffect**: Para manejar la carga inicial de datos (como las ciudades desde el archivo JSON) y la actualización del historial.
- **react-router**: Para manejar la navegación entre las páginas de selección de ciudad y la de visualización del clima.
- **useNavigate**: Para redirigir al usuario entre las páginas (por ejemplo, al hacer clic en "Consultar Clima").
- **useContext**: Para compartir el estado global entre los componentes, como el historial de consultas o los datos del usuario.
- **Custom Hooks**: Para abstraer la lógica de carga de datos y manipulación del localStorage.

## Pasos para la Conversión

### 1. Inicializar el Proyecto en React
- Crea un nuevo proyecto usando **Create React App**.
- Organiza la estructura del proyecto en carpetas adecuadas (por ejemplo: `components`, `hooks`, `context`, etc.).

### 2. Crear las Rutas con `react-router`
- Implementa el enrutamiento con **react-router**:
  - Una ruta para la página principal (`/`), donde se selecciona una ciudad.
  - Una ruta para la página de clima (`/clima/:id`), donde se muestra el clima de la ciudad seleccionada.

### 3. Página de Selección de Ciudad (Componente `CiudadSelector`)
- **useState**: Para manejar la lista de ciudades y la ciudad seleccionada.
- **useEffect**: Para cargar las ciudades desde el archivo `datos.json`.
- **useNavigate**: Al hacer clic en el botón "Consultar Clima", navega a la página de clima de la ciudad seleccionada usando `useNavigate()`.

### 4. Página de Clima (Componente `ClimaDetalle`)
- **useEffect**: Para leer el ID de la ciudad desde la URL y cargar los datos del clima para esa ciudad.
- **useState**: Para manejar los datos de clima (temperatura, humedad, condición, etc.) y actualizar el historial de consultas.
- Muestra una tabla con los datos de clima, similar a la implementación original.
  
### 5. Historial de Consultas
- **useContext**: Crea un contexto para el historial de consultas que pueda ser accedido desde cualquier componente. 
  - El historial debe mostrarse tanto en la página de selección de ciudad como en la página de clima.
  - Cada ítem del historial debe ser un enlace a la consulta correspondiente usando `react-router`.

### 6. Limpiar Historial
- Añade un botón en la página de clima que permita limpiar el historial.
- Actualiza el contexto para reflejar los cambios globalmente.

### 7. Implementar Custom Hooks
- Crea un **custom hook** (`useHistorial`) para manejar la lógica del historial de consultas (agregar, eliminar, y leer del `localStorage`).
- Crea otro **custom hook** (`useCargarCiudades`) para la lógica de carga de ciudades desde el archivo `datos.json`.

### 8. Manejo de Estado Global con `useContext`
- Implementa un **contexto** para compartir el historial de consultas entre componentes.
- Asegúrate de que el historial esté disponible en ambas páginas y pueda actualizarse centralmente.

## Requerimientos Funcionales

1. **Selector de ciudades**: La lista de ciudades debe cargarse dinámicamente desde `datos.json` en la página principal.
2. **Enlaces en el historial**: Cada consulta previa debe aparecer en el historial como un enlace que permita navegar a la página de clima correspondiente.
3. **URL con ID**: La página de clima debe mostrar los detalles basados en el ID de la ciudad, usando `useParams` de `react-router`.
4. **Estado compartido**: El historial de consultas debe estar disponible en ambas páginas y reflejarse correctamente.
5. **Custom Hooks**: Deben utilizarse para encapsular la lógica de historial y carga de datos.
6. **Interacción fluida**: Utiliza `useNavigate` para redirigir a los usuarios entre las páginas.

## Evaluación

1. **Funcionalidad Completa**: La aplicación debe funcionar correctamente en React, cumpliendo con los requisitos.
2. **Uso de Hooks**: Evalúa el uso adecuado de `useState`, `useEffect`, `useNavigate`, `useContext`, y custom hooks.
3. **Modularidad y Componentización**: El código debe estar bien organizado, utilizando componentes reutilizables.
4. **Manejo del Estado Global**: El historial debe gestionarse correctamente con `useContext` y estar disponible globalmente.

## Entrega

Los alumnos deberán subir el proyecto convertido a un repositorio de **GitHub** con instrucciones claras para ejecutarlo, y enviar el enlace antes de la fecha límite.