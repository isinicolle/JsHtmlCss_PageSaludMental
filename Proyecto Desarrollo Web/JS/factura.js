const formDetalle = document.getElementById("formDetalle");
const inputCantidad = document.getElementById("inputCantidad");
const selectDescripcion = document.getElementById("selectDescripcion");
const inputPUnitario = document.getElementById("inputPUnitario");
const inputPTotal = document.getElementById("inputPTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");

let arregloDetalle = [];

const redibujarTabla= () => {
    cuerpoTabla.innerHTML = "";
    arregloDetalle.forEach((detalle) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detalle.cant}</td>
                      <td>${detalle.descripcion}</td>
                      <td>${detalle.pUnit}</td>
                      <td>${detalle.pTotal}</td>`;
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.innerText = "Eliminar";
        tdEliminar.appendChild(botonEliminar);
        fila.appendChild(tdEliminar);
        cuerpoTabla.appendChild(fila);
    });
};

formDetalle.onsubmit= (e) => {
    e.preventDefault();
    //creando el objeto detalle
    const objDetalle = {
        cant: inputCantidad.value,
        descripcion: selectDescripcion.value,
        pUnit: inputPUnitario.value,
        pTotal: inputPTotal.value,
    };
    arregloDetalle.push(objDetalle);
    redibujarTabla();
};