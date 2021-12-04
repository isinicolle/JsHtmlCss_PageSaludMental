let inventario = [];
const formulario = document.querySelector('#formulario');


eventListener();

function eventListener() {
     
    document.addEventListener('DOMContentLoaded' , () => {
        formulario.addEventListener('submit', enviarFormulario );
        validarLocalStorage();
    });

}

function validarLocalStorage() {

    inventario = JSON.parse(localStorage.getItem('inventario'))  || [];

}

function enviarFormulario (e) {

    e.preventDefault();

    const codigoProducto = document.querySelector('#codigo-producto').value;
    const codigoCompra = document.querySelector('#codigo-compra').value;
    const descripcion = document.querySelector('#descripcion').value;
    const cantidad = document.querySelector('#cantidad').value;
    const fechaCompra = document.querySelector('#fecha-compra').value;
    const fechaVencimiento = document.querySelector('#fecha-vencimiento').value;
    
    if(codigoProducto === '' || codigoCompra === '' || descripcion === '' || cantidad === '' || fechaCompra === '' || fechaVencimiento === ''){
        mostrarAlerta();
        return;
    }

    const producto = {
        codigoProducto,
        codigoCompra,
        descripcion,
        cantidad,
        fechaCompra,
        fechaVencimiento
    };

    inventario = [...inventario , producto];

    console.log(inventario);

    /* agreagar al local storage */
    sincronizarLocalStorage();


    /* limpiar formularios */
    formulario.reset();

    window.location.href ='moduloinventario.html';


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
    localStorage.setItem('inventario', JSON.stringify(inventario));
}