function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCloser = document.getElementById("modalCloser");
  modalCloser.addEventListener("click", function () {
    modalOverlay.remove();
  });
}
function modalRegistro_P() {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer cart-1">
          <div id="modalComplete" class="modalComplete animar"></div>
          <span id="modalCloser" class="modalCloser">x</span>
          <img src="../img/paciente.png" alt="" />
          <p class="modalHeader">REGISTRO PACIENTES</p>
          <div class="modalContent">
            <form id="registerForm" class="registerForm">
              <p id="formError"></p>
              <label>
                <input
                  type="text"
                  id="name"
                  name="name" 
                  placeholder="Nombre"
                  maxlength="24"
                  pattern="[A-Z a-z]{3,6}"
                />
              </label>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  maxlength="35"
                />
              </label>
              <label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Numero de celular"
                  maxlength="11"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  maxlength="20"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  maxlength="20"
                />
              </label>
              <button class="validate" id="submitForm" type="submit" onclick="validateRegister_P(event)">Registrarse</button>
            </form>
          </div>
        </div>    
      </div>`;
  }
}
function modalRegistro_M() {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer cart-2">
          <div id="modalComplete" class="modalComplete animar"></div>
          <span id="modalCloser" class="modalCloser">x</span>
          <img src="../img/medico.png" alt="" />
          <p class="modalHeader">REGISTRO MEDICOS</p>
          <div class="modalContent">
            <form id="registerForm" class="registerForm">
              <p id="formError"></p>
              <label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  maxlength="24"
                />
              </label>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  maxlength="35"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  placeholder="Numero de matricula"
                  maxlength="5"
                />
              </label>
              <label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Numero de celular"
                  maxlength="11"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  maxlength="20"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  maxlength="20"
                />
              </label>
              <button class="validate" id="submitForm" type="submit" onclick="validateRegister_M(event)">Registrarse</button>
            </form>
          </div>
        </div>    
      </div>`;
  }
}
function modalLogin() {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer cart-3">
          <span id="modalCloser" class="modalCloser">x</span>
          <div>
            <img src="../img/paciente-negro.png" alt="" />
            <img src="../img/medico-negro.png" alt="" />
          </div>
          <p class="modalHeader">INICIAR SESIÓN</p>
          <div class="modalContent">
            <form id="registerForm" class="registerForm">
              <p id="formError"></p>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  maxlength="35"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  maxlength="20"
                />
              </label>
              <button class="validate" id="submitForm" type="submit" onclick="validateLogin(event)">Entrar</button>
              <button class="recoverPassword" type="submit" onclick="recoverPassword(event)">Recuperar Contraseña</button>
            </form>
          </div>
        </div>    
      </div>`;
  }
}
function modalBlock(user, email) {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer cart-4">
          <span id="modalCloser" class="modalCloser">x</span>
          <div>
            <img src="../img/bloquear-usuario.png" alt="" />
          </div>
          <p class="modalBlockHeader">Seguro que quieres</p>
          <p class="modalBlockHeader">bloquear a ${user}</p>
          <div class="modalContent">
            <button class="bloquear" id="submitForm" onclick="blockedUsers('${email}')">Bloquear</button>
          </div>
        </div>    
      </div>`;
  }
}
function modalTurn(idTurno) {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer cart-4">
          <span id="modalCloser" class="modalCloser">x</span>
          <div>
            <img src="../img/bloquear-usuario.png" alt="" />
          </div>
          <p class="modalBlockHeader">Seguro que quieres</p>
          <p class="modalBlockHeader">borrar el turno ${idTurno}</p>
          <div class="modalContent">
            <button class="bloquear" id="submitForm" onclick="eliminarTurn('${idTurno}')">Bloquear</button>
          </div>
        </div>    
      </div>`;
  }
}
buttonRegister_p.addEventListener("click", function () {
  modalRegistro_P();
  closeModal();
});
buttonRegister_m.addEventListener("click", function () {
  modalRegistro_M();
  closeModal();
});
buttonLogin.addEventListener("click", function () {
  modalLogin();
  closeModal();
});
function buttonBlock(user, email) {
  modalBlock(user, email);
  closeModal();
}
function buttonTurn(idTurno) {
  modalTurn(idTurno);
  closeModal();
}
