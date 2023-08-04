// registroD.js

document.addEventListener("DOMContentLoaded", function () {
  const medicoForm = document.getElementById("medicoForm");
  medicoForm.addEventListener("submit", registrarMedico);
});

function registrarMedico(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombreMedico").value;
  const apellido = document.getElementById("apellidoMedico").value;
  const matricula = document.getElementById("matriculaMedico").value;
  const email = document.getElementById("emailMedico").value;
  const contrasena = document.getElementById("contrasenaMedico").value;
  const repetirContrasena = document.getElementById(
    "repetirContrasenaMedico"
  ).value;

  const validarEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const resultadoValidacion = validarEmail.test(email);

  // Verificar que todos los campos estén completos
  if (
    !nombre ||
    !apellido ||
    !matricula ||
    !email ||
    !contrasena ||
    !repetirContrasena
  ) {
    Swal.fire({
      icon: "error",
      title: "Todos los campos son obligatorios",
    });
    return;
  }

  // Verificar que las contraseñas coincidan
  if (contrasena !== repetirContrasena) {
    Swal.fire({
      icon: "error",
      title: "La contraseña deben ser iguales.",
    });
    return;
  }

  // Verificar si el médico ya está registrado con esos datos
  if (existeMedicoRegistrado(email, matricula)) {
    Swal.fire({
      icon: "error",
      title: "Matricula ya registrada.",
    });
    return;
  } else if (!resultadoValidacion) {
    Swal.fire({
      icon: "error",
      title: "El Email no es valido.",
    });
  }

  // Guardar los datos en el LocalStorage
  const medico = {
    nombre,
    apellido,
    matricula,
    email,
    contrasena,
  };

  // Convertir el objeto medico a una cadena JSON
  const medicoJSON = JSON.stringify(medico);

  // Guardar el objeto en el LocalStorage bajo la clave "medicoRegistrado"
  localStorage.setItem("medicoRegistrado", medicoJSON);

  // Resetear el formulario
  event.target.reset();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "registrado correctamente",
    showConfirmButton: false,
    timer: 1500,
  });
}

function existeMedicoRegistrado(email, matricula) {
  // Obtener todos los médicos registrados del LocalStorage
  const medicoRegistradoJSON = localStorage.getItem("medicoRegistrado");
  if (!medicoRegistradoJSON) {
    return false;
  }

  // Convertir la cadena JSON a un objeto
  const medicoRegistrado = JSON.parse(medicoRegistradoJSON);

  // Verificar si el correo electrónico o la matrícula ya existen
  return (
    medicoRegistrado.email === email || medicoRegistrado.matricula === matricula
  );
}
