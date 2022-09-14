//Funcion que crea objetos Producto
function Producto (id, producto, precio, comercio, promocion) {
    this.id = parseInt(id);
    this.producto = producto;
    this.precio = parseFloat(precio);
    this.comercio = comercio;
    if(promocion.toLowerCase() === 'si') {
        this.promocion = true;
    } else {
        this.promocion = false;
    }
}

//Esta funcion recibe el array de lineas de texto y crea un array de objetos Producto
//en el orden que se encuentran en el archivo
const crearProductos = (lineas) => {
    const productos = [];
    for (let i = 1; i < lineas.length; i++) {
        if(lineas[i] !== '') {
            productos.push(new Producto(...lineas[i].split(',')));
        }
    }
    return productos;
}

module.exports = crearProductos;