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
  } else {
    return false;
  }
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
  const emailExists = aprovUser.find((aprovUser) => {
    return aprovUser.email === email;
  });
  const passwordExists = aprovUser.find((aprovUser) => {
    return aprovUser.password === password;
  });
  if (checkEmptySpacesLogin(email, password)) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (emailExists == undefined) {
    formError.textContent = "E-mail no registrado.";
    return;
  } else if (passwordExists == undefined) {
    formError.textContent = "Contraseña incorrecta.";
    return;
  } else if (email == "admin@gmail.com" && password == "admin123") {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html";
    return;
  } else {
    console.log("Login Completo");
    formError.textContent = "";
    registerForm.reset();
    return;
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
          (this.password = password);
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
    console.log(newUser);
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
  let aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
  console.log(aprovUser);
  const administrador = aprovUser.find((user) => {
    return user.email === email;
  });
  7;
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
