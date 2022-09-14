//la funcion recibe un array de productos y un comercio
//genera un mapa con el producto como clave y guarda en el valor el producto con el precio mas bajo
//Finalmente retorna un array con los productos con el precio mas bajo pertececiente al comercio recibido por parametro

//Crea un mapa donde las claves son los productos y los valores son un array de objetos producto con el precio minimo
const crearMapa = (productos) => {
    let mapa = {};
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if(!mapa[producto.producto]) {
            mapa[producto.producto] = [];
        }
        if(mapa[producto.producto].length === 0) {
            mapa[producto.producto].push(producto);
        } else {
            if(mapa[producto.producto][0].precio > producto.precio) {
                mapa[producto.producto][0] = producto;
            } else if(mapa[producto.producto][0].precio === producto.precio) {
                mapa[producto.producto].push(producto);
            }
        }
    }
    return mapa;
}

const obtenerMejoresPrecios = (productos, comercio) => {
    const mapa = crearMapa(productos);
    let mejoresPrecios = [];
    for (const producto in mapa) {
        for(let i = 0; i < mapa[producto].length; i++) {
            if(mapa[producto][i].comercio === comercio) {
                mejoresPrecios.push(mapa[producto][i]);
            }
        }
    }
    return mejoresPrecios;
}

module.exports = obtenerMejoresPrecios;