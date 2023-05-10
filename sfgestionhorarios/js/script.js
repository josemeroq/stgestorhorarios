// Obtener los elementos del DOM
const formulario = document.querySelector('#formulario');
const tablaHorarios = document.querySelector('#tabla-horarios');

// Evento submit del formulario
formulario.addEventListener('submit', agregarHorario);

// Función para agregar un horario a la tabla
function agregarHorario(e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const carrera = document.querySelector('#carrera').value;
  const nombre = document.querySelector('#nombre').value;
  const nivel = document.querySelector('#nivel').value;
  const aula = document.querySelector('#aula').value;
  const dia = document.querySelector('#dia').value;
  const horaini = document.querySelector('#horaini').value;
  const horafin = document.querySelector('#horafin').value;

  // Validar que todos los campos estén completos
  if (carrera === '' || nombre === '' || nivel === '' || aula === '' || dia === '' || horaini === '' || horafin === '') {
    alert('Por favor, complete todos los campos obligatorios');
    return;
  }

  // Crear una nueva fila en la tabla
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${carrera}</td>
    <td>${nombre}</td>
    <td>${nivel}</td>
    <td>${aula}</td>
    <td>${dia}</td>
    <td>${horaini}</td>
    <td>${horafin}</td>
  `;

  // Agregar la fila a la tabla
  tablaHorarios.appendChild(fila);

  // Mostrar mensaje de éxito
  const mensajeExito = document.querySelector('#mensaje-exito');
  mensajeExito.style.display = 'block';

  // Limpiar los valores del formulario
  formulario.reset();

  // Ocultar el mensaje de éxito después de 3 segundos (3000 milisegundos)
  setTimeout(function() {
    mensajeExito.style.display = 'none';
  }, 3000);
}

// Ordenar la lista de opciones en el select de carrera
window.onload = function() {
  var select = document.getElementById('carrera');
  var opciones = Array.from(select.getElementsByTagName('option'));

  // Ordenar las opciones alfabéticamente
  opciones.sort(function(a, b) {
    return a.textContent.localeCompare(b.textContent);
  });

  // Vaciar el select
  select.innerHTML = '';

  // Agregar las opciones ordenadas al select
  opciones.forEach(function(opcion) {
    select.appendChild(opcion);
  });
};
