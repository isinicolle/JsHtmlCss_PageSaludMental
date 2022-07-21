const tablaInventario = document.querySelector('#tabla-inventario tbody');
const controlFormulario = document.querySelector('#control-formulario');

eventListener();

function eventListener() {

    document.addEventListener('DOMContentLoaded' , () => {
        validarLocalStorage();
    });

    controlFormulario.addEventListener('click', eliminarInventario);
}


function validarLocalStorage() {

    let productos = JSON.parse(localStorage.getItem('inventario'))  || [];
    inventarioHTML(productos);

}

function eliminarInventario(e) {
    
    if(e.target.classList.contains('btn-eliminar')) {

        localStorage.clear();
        limpiarHTML();
    }
}

function inventarioHTML(productos) {

    limpiarHTML();

    productos.forEach(producto => {
        
        const {  cantidad , codigoCompra, codigoProducto, descripcion , fechaCompra, fechaVencimiento } = producto;

        const row = document.createElement('tr');

        row.innerHTML = `

            <td colspan="2"> ${codigoProducto} </td>
            <td colspan="2"> ${codigoCompra} </td>
            <td colspan="2"> ${descripcion} </td>
            <td colspan="2"> ${cantidad} </td>
            <td colspan="2"> ${fechaCompra} </td>
            <td colspan="2"> ${fechaVencimiento} </td>

        `;

        tablaInventario.appendChild(row);
    });
}

function limpiarHTML() {
    while(tablaInventario.firstChild) {
        tablaInventario.removeChild(tablaInventario.firstChild);
    }
}