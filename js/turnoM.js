function mostrarTurnosGuardados() {
    const turnosGuardadosList = document.getElementById("turnosGuardadosList");
    const userLoggin = JSON.parse(localStorage.getItem("isLoggin")) || [];
    const turnosLoggin =
      JSON.parse(localStorage.getItem("turnosGuardados")) || [];
    turnosGuardadosList.innerHTML = "";
    
    User = turnosLoggin.filter((user) => user.nombre === userLoggin[0].nameUser);
    User.forEach((turno, index) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = `Paciente: ${User[0].nombre} - Fecha: ${User[0].fecha}  - Hora: ${User[0].hora} - Profesional: ${User[0].profesional} - Patología: ${User[0].patologia}`; // Agregado
      console.log(User[0].nombre);
      const deleteButton = document.createElement("span");
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", function () {
        eliminarTurnoGuardado(index, User);
      });
  
      listItem.appendChild(deleteButton);
      turnosGuardadosList.appendChild(listItem);
    });
  }

  function eliminarTurnoGuardado(index, turnosGuardadosArray) {
    // Eliminar el turno guardado del array de turnosGuardadosArray
    const turnoGuardadoEliminado = turnosGuardadosArray.splice(index, 1)[0];
  
    // Guardar los turnosGuardadosArray actualizados en LocalStorage
  }
  mostrarTurnosGuardados()