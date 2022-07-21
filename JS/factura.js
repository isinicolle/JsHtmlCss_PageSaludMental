
const inputCantidad = document.getElementById("inputCantidad");
const selectDescripcion = document.getElementById("selectDescripcion");
const inputPUnitario = document.getElementById("inputPUnitario");
const inputPTotal = document.getElementById("inputPTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const btnGuardar = document.getElementById("btnGuardar");

const inputNombre = document.getElementById("inputNombre");
const inputRuc = document.getElementById("inputRuc");
const inputNro = document.getElementById("inputNro");
const inputDireccion = document.getElementById("inputDireccion");
const inputFecha = document.getElementById("inputFecha");
const formulario = document.getElementById("formulario");

let facturas = [];
let arregloDetalle = [];
let arregloProductos = [
    { id: 1, nombre: "Demencia", precio: 123.00, },
    { id: 2, nombre: "Deteriodo Cognitivo Leve", precio: 150.00, },
    { id: 3, nombre: "Enfermedad de Alzheimer", precio: 350.00, },
    { id: 4, nombre: "Test de potencia", precio: 650.00, }
];

const verificarFacturasLocalStorage= () =>{
    const facturasLS= JSON.parse(localStorage.getItem("facturas"));
    //if(facturas){
      //  facturas= facturasLS;
    //} 

    //forma dos
    facturas= facturasLS || []; 
};

verificarFacturasLocalStorage();


const llenarProductos = () => {
    arregloProductos.forEach((p) => {
        const option = document.createElement("option");
        option.value = p.id;
        option.innerText = p.nombre;
        selectDescripcion.appendChild(option);
    });
};
llenarProductos();

const getNombreProductoById = (id) => {
    const objproducto = arregloProductos.find((p) => {
        if (p.id === +id) {
            return p;
        }
    });
    return objproducto.nombre;
};


const getPrecioProductoById = (id) => {
    const objproducto = arregloProductos.find((p) => {
        if (p.id === +id) {
            return p;
        }
    });
    return objproducto.precio;
};



const redibujarTabla = () => {
    cuerpoTabla.innerHTML = "";
    arregloDetalle.forEach((detalle) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detalle.cant}</td>

                      <td>${getNombreProductoById(detalle.descripcion)}</td>

                      <td>${detalle.pUnit}</td>
                      <td>${detalle.pTotal}</td>`;
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.onclick= () =>{
            eliminarDetalleById(detalle.descripcion);
        }


        tdEliminar.appendChild(botonEliminar);
        fila.appendChild(tdEliminar);
        cuerpoTabla.appendChild(fila);
    });
};

const eliminarDetalleById= (id) =>{
    arregloDetalle= arregloDetalle.filter((detalle)=>{
        if(+id !== +detalle.descripcion){
            return detalle;
        }
    });
    redibujarTabla();
};

const agregarDetalle = (objDetalle) => {
    //buscar si el objetoDetalle ya existia en el arregloDetalle
    //de ser asi sumar las cantidades
    //para que solo aparezca una vez en el arreglo


    const resultado = arregloDetalle.find((detalle) => {
        if (+objDetalle.descripcion === +detalle.descripcion) {
            return detalle;
        }
    });

    if (resultado) {
        arregloDetalle = arregloDetalle.map((detalle) => {
            if (+detalle.descripcion === +objDetalle.descripcion) {
                return {
                    cant: +detalle.cant + +objDetalle.cant,
                    descripcion: detalle.descripcion,
                    pTotal: (+detalle.cant + +objDetalle.cant) * +detalle.pUnit,
                    pUnit: +detalle.pUnit,
                };
            }
            return detalle;
        });
    } else {
        arregloDetalle.push(objDetalle);
    }
};

formulario.onsubmit = (e) => {
    e.preventDefault();
    //creando el objeto detalle
    const objDetalle = {
        cant: inputCantidad.value,
        descripcion: selectDescripcion.value,
        pUnit: inputPUnitario.value,
        pTotal: inputPTotal.value,
    };

    agregarDetalle(objDetalle);

    console.log(arregloDetalle);
    redibujarTabla();
};

btnGuardar.onclick = () => {
    //creando el objeto de la factura
    let objFactura = {
        nombre: inputNombre.value,
        direccion: inputDireccion.value,
        fecha: inputFecha.value,
        nro: inputNro.value,
        ruc: inputRuc.value,
        detalle: arregloDetalle,
    };
    facturas.push(objFactura);

    //limpiar los campos
    formulario.reset();

    //Guardar en el LocalStorage
    localStorage.setItem("facturas", JSON.stringify(facturas));

    //borrar la tabla de tbody
    arregloDetalle= [];
    redibujarTabla();
};

selectDescripcion.onchange = () => {

    if (selectDescripcion.value == "0") {
        formDetalle.reset();
        return;
    }
    const precio = getPrecioProductoById(selectDescripcion.value);
    if (precio) {
        inputPUnitario.value = precio;
        calcularTotal();
    }
}

const calcularTotal = () => {
    const cantidad = +inputCantidad.value;
    const pUnit = +inputPUnitario.value;
    const total = cantidad * pUnit;
    inputPTotal.value = total.toFixed(2);
};

inputCantidad.onkeyup = () => {
    calcularTotal();
};

inputCantidad.onchange = () => {
    calcularTotal();
}





