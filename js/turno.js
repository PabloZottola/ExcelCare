function mostrarTurnosGuardados() {
  const turnGuardadosList = document.getElementById("turnosGuardadosList");
  const userLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const turnLoggin = JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  turnGuardadosList.innerHTML = "";
  User = turnLoggin.filter((user) => user.emailUser === userLoggin[0].email);
  User.map((user) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <span><strong>Paciente: </strong>${user.nameUser}</span>
        <span><strong>Fecha: </strong>${user.fecha}</span>
        <span><strong>Hora: </strong>${user.hora}</span>
        <span><strong>Profesional: </strong>${user.profesional}</span>
        <span><strong>Patología: </strong>${user.patologia}</span>
        <span><strong>Numero de turno: </strong>${user.idTurno}</span>
      </div>
      <button class="deleteButton" onclick="buttonTurn('${user.idTurno}')">x</button>
    `;
    turnGuardadosList.appendChild(li);
  });
}
function eliminarTurn(id) {
  const turnLoggin = JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  turn = turnLoggin.filter((turn) => turn.idTurno !== id);
  localStorage.setItem("turnosGuardados", JSON.stringify(turn));
  mostrarTurnosGuardados();
  modalOverlay.remove();
}
function guardarTurn(event) {
  event.preventDefault();
  const turn = JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const nameUser = isLoggin[0].nameUser;
  const email = isLoggin[0].email;
  const idTurno = IDUnico();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const profesional = document.getElementById("profesional").value;
  const patologia = document.getElementById("patologia").value;

  class Turn {
    constructor(nameUser, fecha, hora, profesional, patologia, idTurno, email) {
      (this.nameUser = nameUser),
        (this.fecha = fecha),
        (this.hora = hora),
        (this.profesional = profesional),
        (this.patologia = patologia),
        (this.emailUser = email),
        (this.idTurno = idTurno);
    }
  }

  let newTurn = new Turn(
    nameUser,
    fecha,
    hora,
    profesional,
    patologia,
    idTurno,
    email
  );
  turn.push(newTurn);
  localStorage.setItem("turnosGuardados", JSON.stringify(turn));
  const turnos = JSON.parse(localStorage.getItem("turnosGuardados")) || [];
  console.log(turnos);
  turnoForm.reset();
  mostrarTurnosGuardados();
}

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
  buttonLogin();
  mostrarTurnosGuardados();
  welcome();
};
function IDUnico() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const milisegundos = fecha.getMilliseconds();

  const idUnico = `${hora}${minutos}${segundos}${milisegundos}`;

  return idUnico;
}
