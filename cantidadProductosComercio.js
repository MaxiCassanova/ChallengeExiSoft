//Funcion Acumular los productos que un comercio tenga a la venta

const calcularCantidadProductos = (productos, comercio) => {
    let cantidad = 0;
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].comercio.toLowerCase() === comercio.toLowerCase()) {
            cantidad++;
        }
    }
    return cantidad;
}

module.exports = calcularCantidadProductos;
