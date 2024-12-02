// clima.js

// Función para mostrar el clima de la ciudad seleccionada por ID
function mostrarClima() {
    const ciudadId = obtenerParametroURL('id');
    if (!ciudadId) return;

    fetch('datos.json')
        .then(response => response.json())
        .then(datos => {
            const ciudad = datos.ciudades.find(c => c.id == ciudadId);
            if (!ciudad) return;

            // Mostrar datos del clima en una tabla
            const tablaClima = document.getElementById('tablaClima');
            tablaClima.innerHTML = `
                <tr><td>Ciudad</td><td>${ciudad.nombre}</td></tr>
                <tr><td>Temperatura</td><td>${ciudad.temperatura} °C</td></tr>
                <tr><td>Humedad</td><td>${ciudad.humedad} %</td></tr>
                <tr><td>Condición</td><td>${ciudad.condicion}</td></tr>
            `;

            // Guardar la consulta en el historial
            guardarEnHistorial(ciudad.id, ciudad.nombre);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Función para guardar una consulta en el historial
function guardarEnHistorial(id, ciudad) {
    let historial = JSON.parse(localStorage.getItem('historialConsultas')) || [];

    const ciudadYaConsultada = historial.some(consulta => consulta.id === id);

    if (!ciudadYaConsultada) {
        historial.push({ id, ciudad, fecha: new Date().toLocaleString() });
        localStorage.setItem('historialConsultas', JSON.stringify(historial));
    }

    mostrarHistorial();
}

// Función para mostrar el historial de consultas con enlaces
function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem('historialConsultas')) || [];
    const listaHistorial = document.getElementById('listaHistorial');
    listaHistorial.innerHTML = '';

    historial.forEach(consulta => {
        const li = document.createElement('li');
        const enlace = document.createElement('a');
        enlace.href = `clima.html?id=${consulta.id}`;
        enlace.textContent = `${consulta.ciudad} - ${consulta.fecha}`;
        li.appendChild(enlace);
        listaHistorial.appendChild(li);
    });
}

// Función para obtener los parámetros de la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Función para limpiar el historial de consultas
function limpiarHistorial() {
    localStorage.removeItem('historialConsultas');
    mostrarHistorial();
}

// Función para volver a la página anterior
function volverAtras() {
    window.location.href = 'index.html'; 
}

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarClima();
    mostrarHistorial();
    document.getElementById('limpiarHistorial').addEventListener('click', limpiarHistorial);
    document.getElementById('volverAtras').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});





