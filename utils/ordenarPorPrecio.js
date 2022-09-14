const mergeSort = require('./mergeSort');

//La funcion crearMapa se ocupa de convertir el array de productos en un mapa
//donde cada clave es un comercio y el valor es un array de productos de ese comercio
//para facilitar la division de los productos por comercio
const crearMapa = (productos) => {
    const mapa = {};
    //Recorre el array de productos para crear el mapa
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        //Si el comercio no existe en el mapa, se crea una clave con el nombre del comercio
        //y se le asigna un array vacio
        if(!mapa[producto.comercio]) {
            mapa[producto.comercio] = [];
        }
        //Se agrega el producto al array de productos del comercio
        mapa[producto.comercio].push(producto);
    }
    return mapa;
}

//La funcion ordenarMapa ordena a partir de MergeSort cada array de productos de cada comercio en el mapa
const ordenarMapa = (mapa) => {
    for (const comercio in mapa) {
        mapa[comercio] = mergeSort(mapa[comercio], 'precio');
    }
    return mapa;
}


//OrdenarPorPrecio recibe el array de productos, y llama a las funciones crearMapa y ordenarMapa
//Una vez que se tiene el mapa ordenado, se retorna el mapa
const ordenarPorPrecio = (listaProductos) => {
    const mapa = crearMapa(listaProductos);
    const mapaOrdenado = ordenarMapa(mapa);
    return mapaOrdenado;
}

module.exports = ordenarPorPrecio;

