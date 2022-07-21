let tratamiento = [];
const formulario = document.querySelector('#formulario');


eventListener();

function eventListener() {
     
    document.addEventListener('DOMContentLoaded' , () => {
        formulario.addEventListener('submit', enviarFormulario );
        validarLocalStorage();
    });

}

function validarLocalStorage() {

    tratamiento = JSON.parse(localStorage.getItem('tratamiento'))  || [];

}

function enviarFormulario (e) {

    e.preventDefault();

    const codigotratamiento = document.querySelector('#codigotratamiento').value;
    const cita = document.querySelector('#cita').value;
    const paciente = document.querySelector('#paciente').value;
    const condicion = document.querySelector('#condicion').value;
    const descripcioncondicion = document.querySelector('#descripcioncondicion').value;
    const nombretratamiento = document.querySelector('#nombretratamiento').value;
    const descripciontratamiento = document.querySelector('#descripciontratamiento').value;
    const precio = document.querySelector('#precio').value;
    
    
    if(codigotratamiento === '' || cita === '' || paciente === '' || condicion === '' || descripcioncondicion === '' || nombretratamiento === '' || descripciontratamiento === '' || precio === ''){
        mostrarAlerta();
        return;
    }

    const tra = {
        codigotratamiento,
        cita,
        paciente,
        condicion,
        descripcioncondicion,
        nombretratamiento,
        descripciontratamiento,
        precio,
    };

    tratamiento = [...tratamiento , tra];

    console.log(tratamiento);

    /* agreagar al local storage */
    sincronizarLocalStorage();


    /* limpiar formularios */
    formulario.reset();

    window.location.href ='modulotratamientos.html';


}

function mostrarAlerta() {

    const existe = document.querySelector('.error');

    if(!existe){

    
        const error = document.createElement('div');
        error.innerHTML = `
            <div class="alert alert-warning error mt-4 text-center" role="alert">
                Todos los campos son obligatorios
            </div>
        `
        formulario.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 2500);
    }

}

function sincronizarLocalStorage() {
    localStorage.setItem('tratamiento', JSON.stringify(tratamiento));
}