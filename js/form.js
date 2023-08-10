function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
}
function checkEmptySpacesRegister_P(nameUser, email, phone, password) {
  if (
    nameUser.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    password.trim() === ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmptySpacesRegister_M(
  nameUser,
  email,
  matricula,
  phone,
  password,
  confirmPassword
) {
  if (
    nameUser.trim() === "" ||
    email.trim() === "" ||
    matricula.trim() === "" ||
    phone.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmptySpacesLogin(email, password) {
  if (email.trim() === "" || password.trim() === "") {
    return true;
  }
  return false;
}
function validateDataRegister_P(
  nameUser,
  email,
  phone,
  password,
  confirmPassword
) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  let aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  let blockUser = JSON.parse(localStorage.getItem("bloqueados")) || [];
  const emailExists = storedUsers.find((storedUsers) => {
    return storedUsers.email === email;
  });
  const emailExists_A = aprovUser.find((aprovUser) => {
    return aprovUser.email === email;
  });
  const emailExists_B = blockUser.find((blockUser) => {
    return blockUser.email === email;
  });
  if (
    checkEmptySpacesRegister_P(
      nameUser,
      email,
      phone,
      password,
      confirmPassword
    )
  ) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (/\d/.test(nameUser)) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (nameUser.length <= 2) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (!validateEmail(email)) {
    formError.textContent = "Formato de E-mail no valido.";
    return;
  } else if (
    emailExists !== undefined ||
    emailExists_A !== undefined ||
    emailExists_B !== undefined
  ) {
    formError.textContent = "E-mail esta en uso.";
    return;
  } else if (/[a-zA-Z]/.test(phone)) {
    formError.textContent = "Numero de telefono invalido";
    return;
  } else if (phone.length < 10) {
    formError.textContent = "Numero de telefono invalido";
    return;
  } else if (password.length <= 5) {
    formError.textContent = "Contraseña invalida";
    return;
  } else if (password !== confirmPassword) {
    formError.textContent = "Las contraseña no coinciden";
    return;
  } else {
    console.log("Registro Completo");
    formError.textContent = "";
    registerForm.reset();
    return true;
  }
}
function validateDataRegister_M(
  nameUser,
  email,
  matricula,
  phone,
  password,
  confirmPassword
) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  let aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  let blockUser = JSON.parse(localStorage.getItem("bloqueados")) || [];
  const emailExists = storedUsers.find((storedUsers) => {
    return storedUsers.email === email;
  });
  const emailExists_A = aprovUser.find((aprovUser) => {
    return aprovUser.email === email;
  });
  const emailExists_B = blockUser.find((blockUser) => {
    return blockUser.email === email;
  });
  const matriculaExists = storedUsers.find((storedUsers) => {
    return storedUsers.matricula === matricula;
  });
  const matriculaExists_A = aprovUser.find((aprovUser) => {
    return aprovUser.matricula === matricula;
  });
  const matriculaExists_B = blockUser.find((blockUser) => {
    return blockUser.matricula === matricula;
  });
  if (
    checkEmptySpacesRegister_M(
      nameUser,
      email,
      matricula,
      phone,
      password,
      confirmPassword
    )
  ) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (/\d/.test(nameUser)) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (nameUser.length <= 2) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (!validateEmail(email)) {
    formError.textContent = "Formato de E-mail no valido.";
    return;
  } else if (
    emailExists !== undefined ||
    emailExists_A !== undefined ||
    emailExists_B !== undefined
  ) {
    formError.textContent = "E-mail esta en uso.";
    return;
  } else if (matricula.length < 5) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (/[a-zA-Z]/.test(matricula)) {
    formError.textContent = "Numero de matricula invalido";
    return;
  } else if (
    matriculaExists !== undefined ||
    matriculaExists_A !== undefined ||
    matriculaExists_B !== undefined
  ) {
    formError.textContent = "Matricula ya registrada.";
    return;
  } else if (/[a-zA-Z]/.test(phone)) {
    formError.textContent = "Numero de telefono invalido";
    return;
  } else if (phone.length < 10) {
    formError.textContent = "Numero de telefono invalido";
    return;
  } else if (password.length <= 5) {
    formError.textContent = "Contraseña invalida";
    return;
  } else if (password !== confirmPassword) {
    formError.textContent = "Las contraseña no coinciden";
    return;
  } else {
    console.log("Registro Completo");
    formError.textContent = "";
    registerForm.reset();
    return true;
  }
}
function validateDataLogin(email, password) {
  let aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  const login = document.getElementById("buttonLogin");
  User = aprovUser.filter((user) => user.email === email);
  if (User[0] === undefined) {
    User.push({
      nameUser: "",
      email: "",
      phone: "",
      password: "",
      matricula: "",
    });
  }
  if (checkEmptySpacesLogin(email, password)) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (email !== User[0].email) {
    formError.textContent = "E-mail no registrado.";
    return;
  } else if (User[0].password !== password) {
    formError.textContent = "Contraseña incorrecta.";
    return;
  } else if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem("isLoggin", JSON.stringify(User));
    window.location.href = "http://127.0.0.1:5500/pages/admin.html";
    login.innerHTML = "Panel de Control";
    return;
  } else if (User[0].matricula == null) {
    localStorage.setItem("isLoggin", JSON.stringify(User));
    window.location.href = "http://127.0.0.1:5500/pages/paciente.html";
  } else {
    User.push(User[0]);
    localStorage.setItem("isLoggin", JSON.stringify(User));
    window.location.href = "http://127.0.0.1:5500/pages/medico.html";
  }
}
function storage(nameUser, email, phone, password, matricula) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (matricula === undefined) {
    class User {
      constructor(nameUser, email, phone, password) {
        (this.nameUser = nameUser),
          (this.email = email),
          (this.phone = phone),
          (this.password = password),
          (this.matricula = null);
      }
    }
    let newUser = new User(nameUser, email, phone, password);
    storedUsers.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));
  } else {
    console.log(matricula);
    class User {
      constructor(nameUser, email, phone, password, matricula) {
        (this.nameUser = nameUser),
          (this.email = email),
          (this.phone = phone),
          (this.password = password),
          (this.matricula = matricula);
      }
    }
    let newUser = new User(nameUser, email, phone, password, matricula);
    storedUsers.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));
  }
}
function validateRegister_P(event) {
  event.preventDefault();
  const nameUser = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (
    validateDataRegister_P(nameUser, email, phone, password, confirmPassword) ==
    true
  ) {
    storage(nameUser, email, phone, password);
  }
}
function validateRegister_M(event) {
  event.preventDefault();
  const nameUser = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const matricula = document.getElementById("matricula").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (
    validateDataRegister_M(
      nameUser,
      email,
      matricula,
      phone,
      password,
      confirmPassword
    ) == true
  ) {
    storage(nameUser, email, phone, password, matricula);
  }
}
function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  validateDataLogin(email, password);
}
document.addEventListener("DOMContentLoaded", function () {
  const email = "admin@gmail.com";
  const aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  const administrador = aprovUser.find((user) => {
    return user.email === email;
  });
  if (administrador == undefined) {
    const admin = {
      nameUser: "admin",
      email: "admin@gmail.com",
      password: "admin123",
    };
    aprovUser.push(admin);
    localStorage.setItem("aprobados", JSON.stringify(aprovUser));
  }
});

function recoverPassword(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  User = aprovUser.filter((user) => user.email === email);

  if (email.trim() === "") {
    formError.textContent = "Debe ingresar un email.";
  } else if (User[0] === undefined) {
    formError.textContent = "Usuario no registrado.";
  } else {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "pablozottola66@gmail.com",
      Password: "A195DAB694DB03A96AE5EC8A44078509D383",
      To: email,
      From: "pablozottola66@gmail.com",
      Subject: "Recuperar contraseña",
      Body: "hola soy un mensaje de recuperar contraseña. Saludos cordiales.",
    }).then((message) => alert(message));
  }
}
window.onload = function () {
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
  const login = document.getElementById("buttonLogin");
  const panel = document.getElementById("Panel");
  if (isLoggin[0].email === "admin@gmail.com") {
    login.remove();
    panel.innerHTML = `
      <button id="buttonPanel">Panel de control</button>
    `;
    document.getElementById("buttonPanel").onclick = panelAdmin;
  } else if (isLoggin[0] === undefined) {
    return;
  } else if (isLoggin[0].matricula === null) {
    login.remove();
    panel.innerHTML = `
      <button id="buttonPanel">Mi cuenta</button>
    `;
    document.getElementById("buttonPanel").onclick = panelUser;
  } else if (isLoggin[0].matricula.length === 5) {
    login.remove();
    panel.innerHTML = `
      <button id="buttonPanel">Panel de medico</button>
    `;
    document.getElementById("buttonPanel").onclick = panelMedic;
  }
};
function panelAdmin() {
  window.location.href = "../pages/admin.html";
}
function panelUser() {
  window.location.href = "../pages/paciente.html";
}
function panelMedic() {
  window.location.href = "../pages/medico.html";
}
