// index.js

// Función para cargar los datos del JSON y llenar el selector de ciudades
function cargarCiudades() {
    fetch('datos.json')
        .then(response => response.json())
        .then(datos => {
            const selectorCiudades = document.getElementById('ciudades');
            datos.ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.nombre;
                option.textContent = ciudad.nombre;
                selectorCiudades.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Función para manejar el envío del formulario
function manejarFormulario(event) {
    event.preventDefault();
    const ciudadSeleccionada = document.getElementById('ciudades').value;
    
    // Buscar el ID de la ciudad seleccionada en datos.json
    fetch('datos.json')
        .then(response => response.json())
        .then(datos => {
            const ciudad = datos.ciudades.find(c => c.nombre === ciudadSeleccionada);
            if (ciudad) {
                // Redirigir a clima.html con el ID de la ciudad en la URL
                window.location.href = `clima.html?id=${ciudad.id}`;
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Función para mostrar el historial de consultas en index.html con enlaces
function mostrarHistorialEnIndex() {
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

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarCiudades();
    document.getElementById('formClima').addEventListener('submit', manejarFormulario);
    document.getElementById('verHistorial').addEventListener('click', mostrarHistorialEnIndex); // Mostrar historial en index
});






