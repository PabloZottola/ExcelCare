function mostrarTurnosGuardados(turnosGuardadosArray) {
  const turnosGuardadosList = document.getElementById("turnosGuardadosList");
  const userLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const turnosLoggin =
    JSON.parse(localStorage.getItem("turnosGuardados")) || [];

  User = turnosLoggin.filter((user) => user.nombre === userLoggin[0].nameUser);
  User.map((user) => {
    const li = document.createElement("li");
    console.log(user);
    li.innerHTML = `
      <div>
        <span><strong>Paciente: </strong>${user.nombre}</span>
        <span><strong>Hora: </strong>${user.hora}</span>
        <span><strong>Profesional: </strong>${user.profesional}</span>
        <span><strong>Patología: </strong>${user.patologia}</span>
      </div>
      <div>
        <button class="deleteButton">x</button>
      </div>

    `;
    turnosGuardadosList.appendChild(li);
  });
}
function eliminarTurnoGuardado(index, turnosGuardadosArray) {
  const turnoGuardadoEliminado = turnosGuardadosArray.splice(index, 1)[0];
  localStorage.setItem("turnosGuardados", JSON.stringify(turnosGuardadosArray));
  mostrarTurnosGuardados(turnosGuardadosArray);
}

document.addEventListener("DOMContentLoaded", function () {
  const obtenerTurnosGuardados =
    JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  const turnoForm = document.getElementById("turnoForm");
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const turnosGuardadosArray = obtenerTurnosGuardados;
  mostrarTurnosGuardados(turnosGuardadosArray);

  turnoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = isLoggin[0].nameUser;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const profesional = document.getElementById("profesional").value;
    const patologia = document.getElementById("patologia").value;

    const nuevoTurno = {
      nombre,
      fecha,
      hora,
      profesional,
      patologia,
    };
    turnosGuardadosArray.push(nuevoTurno);
    localStorage.setItem(
      "turnosGuardados",
      JSON.stringify(turnosGuardadosArray)
    );
    mostrarTurnosGuardados(turnosGuardadosArray);
    turnoForm.reset();
  });
});

function welcome() {
  const aprovUser = JSON.parse(localStorage.getItem("isLoggin")) || [];

  if (aprovUser[0].nameUser === undefined) {
    aprovUser[0].nameUser = "";
  }
  const welcome = `Bienvenido ${aprovUser[0].nameUser}`;
  document.getElementById("welcome").innerText = welcome;
}
function logout() {
  localStorage.removeItem("isLoggin");
  window.location.href = "../index.html";
}
window.onload = function () {
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];

  if (isLoggin[0] === undefined) {
    isLoggin.push({
      nameUser: "",
      email: "",
      phone: "",
      password: "",
      matricula: "",
    });
  }
  if (isLoggin[0].matricula !== null) {
    window.location.href = "../index.html";
  } else if (isLoggin[0].nameUser === undefined) {
    window.location.href = "../index.html";
  }
  welcome();
};
