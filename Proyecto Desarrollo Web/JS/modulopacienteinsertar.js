let paciente = [];
const formulario = document.querySelector("#formulario");

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", enviarFormulario);
    validarLocalStorage();
  });
}

function validarLocalStorage() {
  paciente = JSON.parse(localStorage.getItem("paciente")) || [];
}

function enviarFormulario(e) {
  e.preventDefault();

  const codigoPaciente = document.querySelector("#codigo-paciente").value;
  const nombrePaciente = document.querySelector("#nombre-paciente").value;
  const apellidoPaciente = document.querySelector("#apellido-paciente").value;
  const correoElectronico = document.querySelector("#correo-electronico").value;
  const telefonoFijo = document.querySelector("#telefono-fijo").value;
  const telefonoParticular = document.querySelector(
    "#telefono-particular"
  ).value;
  const fechaNacimiento = document.querySelector("#fecha-nacimiento").value;
  const identidad = document.querySelector("#identidad").value;
  const ocupacion = document.querySelector("#ocupacion").value;
  const genero = document.querySelector("#genero").value;

  if (
    codigoPaciente === "" ||
    nombrePaciente === "" ||
    apellidoPaciente === "" ||
    correoElectronico === "" ||
    telefonoFijo === "" ||
    telefonoParticular === "" ||
    fechaNacimiento === "" ||
    identidad === "" ||
    ocupacion === "" ||
    genero === ""
  ) {
    mostrarAlerta();
    return;
  }

  const paci = {
    codigoPaciente,
    nombrePaciente,
    apellidoPaciente,
    correoElectronico,
    telefonoFijo,
    telefonoParticular,
    fechaNacimiento,
    identidad,
    ocupacion,
    genero,
  };

  paciente = [...paciente, paci];

  console.log(paciente);

  /* agreagar al local storage */
  sincronizarLocalStorage();

  /* limpiar formularios */
  formulario.reset();

  window.location.href = "../modulos/modulopacientes.html";
}

function mostrarAlerta() {
  const existe = document.querySelector(".error");

  if (!existe) {
    const error = document.createElement("div");
    error.innerHTML = `
            <div class="alert alert-warning error mt-4 text-center" role="alert">
                Todos los campos son obligatorios
            </div>
        `;
    formulario.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 2500);
  }
}

function sincronizarLocalStorage() {
  localStorage.setItem("paciente", JSON.stringify(paciente));
}
