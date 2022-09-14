//Esta funcion crea un mapa de productos, donde la clave es el nombre del producto
//y el valor es un array con todos los productos con ese nombre
const crearMapa = (productos) => {
    let mapa = {};
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        //Si el producto no esta en el mapa, lo agrego y le pusheo el primer producto
        if(!mapa[producto.producto]) {
            mapa[producto.producto] = [];
            mapa[producto.producto].push(producto);
        } else {
            //Si el producto ya esta en el mapa, comparo los precios
            if(mapa[producto.producto][0].precio > producto.precio) {
                //En caso de que el precio del producto actual sea menor, lo reemplazo
                mapa[producto.producto][0] = producto;
            } else if(mapa[producto.producto][0].precio === producto.precio) {
                //En caso de que el precio sea igual, pusheo el producto al array
                mapa[producto.producto].push(producto);
            }
        }
    }
    //Esta funcion se diferencia a crearMapa de ordenarPorPrecio y promediarPrecios
    //Debido a que esta funcion contiene logica adicional para
    //agregar los mejores precios a un array y facilitar el trabajo posterior
    return mapa;
}

const obtenerMejoresPrecios = (productos, comercio) => {
    //Creo un mapa de productos con la funcion anterior
    const mapa = crearMapa(productos);
    let mejoresPrecios = [];
    //Recorro el mapa
    for (const producto in mapa) {
        for(let i = 0; i < mapa[producto].length; i++) {
            //Solo si el comercio recibido por parametro es igual al comercio del producto actual, lo pusheo al array
            if(mapa[producto][i].comercio === comercio) {
                mejoresPrecios.push(mapa[producto][i]);
            }
        }
    }
    return mejoresPrecios;
}

module.exports = obtenerMejoresPrecios;