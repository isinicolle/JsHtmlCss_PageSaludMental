
let inventario = [];
const producto = {};
const formulario = document.querySelector('#formulario');
const descripcion = document.querySelector('#descripcion');
const codigoProducto = document.querySelector('#codigo-producto');

eventListener();

function eventListener() {
     
    document.addEventListener('DOMContentLoaded' , () => {
        formulario.addEventListener('submit', enviarFormulario );
        codigoProducto.addEventListener('change', llenarCampos);
        descripcion.addEventListener('change', llenarCampos);

    });

}

function llenarCampos(e) {
    console.log(e.target.value);
}


function enviarFormulario (e) {

    e.preventDefault();

    

    console.log(descripcion);
}

/*Captura de datos escrito en los inputs     
var nom = document.getElementById("nombretxt").value;
var apel = document.getElementById("apellidotxt").value;
/*Guardando los datos en el LocalStorage*/
/*localStorage.setItem("Nombre", nom);
localStorage.setItem("Apellido", apel);*/   
