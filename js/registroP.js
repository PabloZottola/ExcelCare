document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#pacienteForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      saveDataToLocalStorage();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registrado Correctamente.",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    }
  });
});

function validateForm() {
  const nombre = document.querySelector("#nombrePaciente").value.trim();
  const apellido = document.querySelector("#apellidoPaciente").value.trim();
  const email = document.querySelector("#emailPaciente").value.trim();
  const contrasena = document.querySelector("#contrasenaPaciente").value;
  const repetirContrasena = document.querySelector(
    "#repetirContrasenaPaciente"
  ).value;

  const validarEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const resultadoValidacion = validarEmail.test(email);

  // Validación de campos obligatorios
  if (!nombre || !apellido || !email || !contrasena || !repetirContrasena) {
    Swal.fire({
      icon: "error",
      title: "Todos los campos son obligatorios",
    });
    return false;
  }

  // Verificación de que las contraseñas coincidan
  if (contrasena !== repetirContrasena) {
    Swal.fire({
      icon: "error",
      title: "La contraseña deben ser iguales.",
    });

    return false;
  } else if (!resultadoValidacion) {
    Swal.fire({
      icon: "error",
      title: "El Email no es valido.",
    });
    return false;
  }
  // Comprobar si el email ya está registrado en el localStorage
  const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  const emailRegistrado = pacientes.find(
    (paciente) => paciente.email === email
  );

  if (emailRegistrado) {
    Swal.fire({
      icon: "error",
      title: "El Email ya esta registrado",
    });
    return false;
  }

  return true;
}

function saveDataToLocalStorage() {
  const nombre = document.querySelector("#nombrePaciente").value.trim();
  const apellido = document.querySelector("#apellidoPaciente").value.trim();
  const email = document.querySelector("#emailPaciente").value.trim();
  const contrasena = document.querySelector("#contrasenaPaciente").value;

  const paciente = {
    nombre,
    apellido,
    email,
    contrasena,
  };

  const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}
