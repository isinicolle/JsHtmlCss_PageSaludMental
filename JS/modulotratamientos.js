const tablaTratamiento = document.querySelector('#tabla-tratamiento tbody');
const controlFormulario = document.querySelector('#control-formulario');

eventListener();

function eventListener() {

    document.addEventListener('DOMContentLoaded' , () => {
        validarLocalStorage();
    });

    controlFormulario.addEventListener('click', eliminarTratamiento);
}


function validarLocalStorage() {

    let tra = JSON.parse(localStorage.getItem('tratamiento'))  || [];
    inventarioHTML(productos);

}

function eliminarTratamiento(e) {
    
    if(e.target.classList.contains('btn-eliminar')) {

        localStorage.clear();
        limpiarHTML();
    }
}

function tratamientoHTML(tra) {

    limpiarHTML();

    tra.forEach(tr => {
        
        const {  codigo , citacon, paciente, condicion, descripcioncondicion , nombretratamiento, descripciontratamiento, precio } = tr;

        const row = document.createElement('tr');

        row.innerHTML = `

            <td colspan="2"> ${codigo} </td>
            <td colspan="2"> ${citacon} </td>
            <td colspan="2"> ${paciente} </td>
            <td colspan="2"> ${condicion} </td>
            <td colspan="2"> ${descripcioncondicion} </td>
            <td colspan="2"> ${nombretratamiento} </td>
            <td colspan="2"> ${descripciontratamiento} </td>
            <td colspan="2"> ${precio} </td>
            
        `;

        tablaTratamiento.appendChild(row);
    });
}

function limpiarHTML() {
    while(tablaTratamiento.firstChild) {
        tablaTratamiento.removeChild(tablaTratamiento.firstChild);
    }
}