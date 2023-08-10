// Archivo "turno.js"

// Función para obtener los turnos guardados almacenados en LocalStorage
function obtenerTurnosGuardados() {
  const turnosGuardadosString = localStorage.getItem("turnosGuardados");
  return JSON.parse(turnosGuardadosString) || [];
}

// Función para guardar los turnos guardados en LocalStorage
function guardarTurnosGuardados(turnosGuardadosArray) {
  const turnosGuardadosString = JSON.stringify(turnosGuardadosArray);
  localStorage.setItem("turnosGuardados", turnosGuardadosString);
}

// Función para mostrar los turnos guardados en la página
function mostrarTurnosGuardados(turnosGuardadosArray) {
  const turnosGuardadosList = document.getElementById("turnosGuardadosList");
  const userLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const turnosLoggin =
    JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  turnosGuardadosList.innerHTML = "";
  User = turnosLoggin.filter((user) => user.nombre === userLoggin[0].nameUser);

  User.forEach((turno, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `Paciente: ${turno.nombre} - Fecha: ${turno.fecha}  - Hora: ${turno.hora} - Profesional: ${turno.profesional} - Patología: ${turno.patologia}`; // Agregado

    // Agregar botón de eliminar al ítem de la lista de turnosGuardadosArray
    const deleteButton = document.createElement("span");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", function () {
      eliminarTurnoGuardado(index, turnosGuardadosArray);
    });

    listItem.appendChild(deleteButton);
    turnosGuardadosList.appendChild(listItem);
  });
}

// Función para eliminar un turno guardado del array y actualizar la lista en el HTML
function eliminarTurnoGuardado(index, turnosGuardadosArray) {
  // Eliminar el turno guardado del array de turnosGuardadosArray
  const turnoGuardadoEliminado = turnosGuardadosArray.splice(index, 1)[0];

  // Guardar los turnosGuardadosArray actualizados en LocalStorage
  guardarTurnosGuardados(turnosGuardadosArray);
  // Mostrar los turnosGuardadosArray actualizados en la lista de turnosGuardadosArray
  mostrarTurnosGuardados(turnosGuardadosArray);
}

document.addEventListener("DOMContentLoaded", function () {
  const turnoForm = document.getElementById("turnoForm");
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];

  // Obtener los turnos guardados almacenados en LocalStorage y mostrarlos en la lista
  const turnosGuardadosArray = obtenerTurnosGuardados();
  mostrarTurnosGuardados(turnosGuardadosArray);

  turnoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario para el nuevo turno
    const nombre = isLoggin[0].nameUser;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const profesional = document.getElementById("profesional").value;
    const patologia = document.getElementById("patologia").value;

    // Crear un nuevo objeto de turno con los datos del formulario
    const nuevoTurno = {
      nombre,
      fecha,
      hora,
      profesional,
      patologia,
    };

    // Agregar el nuevo turno al array de turnos guardados
    turnosGuardadosArray.push(nuevoTurno);
    // Guardar los turnos guardados actualizados en LocalStorage
    guardarTurnosGuardados(turnosGuardadosArray);

    // Mostrar los turnos guardados actualizados en la lista
    mostrarTurnosGuardados(turnosGuardadosArray);

    turnoForm.reset(); // Limpiar el formulario después de agregar el turno
  });
});

function welcome() {
  let aprovUser = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const welcome = `Bienvenido ${aprovUser[0].nameUser}`;
  document.getElementById("welcome").innerText = welcome;
}
welcome();
function logout() {
  localStorage.removeItem("isLoggin");
  window.location.href = "../index.html";
}
