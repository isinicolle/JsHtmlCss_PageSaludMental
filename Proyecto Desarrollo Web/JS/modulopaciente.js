const tablaPaciente = document.querySelector("#tabla-paciente tbody");
const controlFormulario = document.querySelector("#control-formulario");

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", () => {
    validarLocalStorage();
  });

  controlFormulario.addEventListener("click", eliminarPaciente);
}

function validarLocalStorage() {
  let pacie = JSON.parse(localStorage.getItem("paciente")) || [];
  pacienteHTML(pacie);
}

function eliminarPaciente(e) {
  if (e.target.classList.contains("btn-eliminar")) {
    localStorage.clear();
    limpiarHTML();
  }
}

function pacienteHTML(pacie) {
  limpiarHTML();

  pacie.forEach((paci) => {
    const {
        nombrePaciente,
        apellidoPaciente,
        correoElectronico,
        telefonoFijo,
        telefonoParticular,
        fechaNacimiento,
        identidad,
        ocupacion,
 
    } = paci;

    const row = document.createElement("tr");

    row.innerHTML = `

            <td colspan="2"> ${codigoPaciente} </td>
            <td colspan="2"> ${nombrePaciente} </td>
            <td colspan="2"> ${apellidoPaciente} </td>
            <td colspan="2"> ${correoElectronico} </td>
            <td colspan="2"> ${telefonoFijo} </td>
            <td colspan="2"> ${telefonoParticular} </td>
            <td colspan="2"> ${fechaNacimiento} </td>
            <td colspan="2"> ${identidad} </td>
            <td colspan="2"> ${ocupacion} </td>
           

        `;

    tablaPaciente.appendChild(row);
  });
}

function limpiarHTML() {
  while (tablaPaciente.firstChild) {
    tablaPaciente.removeChild(tablaPaciente.firstChild);
  }
}
