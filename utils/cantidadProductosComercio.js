//La funcion recibe un comercio y cuenta la cantidad de productos que tiene a la venta
const calcularCantidadProductos = (productos, comercio) => {
    let cantidad = 0;
    for (let i = 0; i < productos.length; i++) {
        //Comparo los string con toLowerCase para evitar problemas con mayusculas y minusculas
        if(productos[i].comercio.toLowerCase() === comercio.toLowerCase()) {
            cantidad++;
        }
    }
    return cantidad;
}

module.exports = calcularCantidadProductos;
