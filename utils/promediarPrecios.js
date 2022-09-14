//Esta funcion crea un mapa de productos, donde la clave es el nombre del producto
//y el valor es un objeto con la informacion sobre los precios y la cantidad de comercios
const crearMapa = (productos) => {
    let mapa = {};
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        //Si el producto no esta en el mapa, lo agrego dandole un valor inicial
        if(!mapa[producto.producto]) {
            mapa[producto.producto] = {
                precioTotalSinPromocion: 0,
                precioTotalConPromocion: 0,
                cantidadComerciosSinPromocion: 0,
                cantidadComerciosConPromocion: 0
            };
        }
        //Si el producto ya esta en el mapa, reviso si el producto actual tiene promocion o no
        //para definir si sumarle al precio total con promocion o sin promocion
        if(producto.promocion) {
            
            mapa[producto.producto].precioTotalConPromocion += producto.precio;
            mapa[producto.producto].cantidadComerciosConPromocion++;
        } else {
            mapa[producto.producto].precioTotalSinPromocion += producto.precio;
            mapa[producto.producto].cantidadComerciosSinPromocion++;
        }
    }
    //Esta funcion se diferencia a crearMapa de ordenarPorPrecio y mejoresPrecios
    //Debido a que esta funcion contiene logica adicional para
    //agregar los precios totales y la cantidad de comercios a un objeto
    //y facilitar el trabajo posterior
    return mapa;
}


//Esta funcion recibe un array de Productos
//Y devuelve un array de objetos con la informacion de los precios promedio para cada tipo de producto
//En caso de que un producto no tenga locales con promocion, el precio promedio con promocion sera 0
//En caso de que un producto no tenga locales sin promocion, el precio promedio sin promocion sera 0
const promediarPrecios = (productos) => {
    let mapa = crearMapa(productos);
    let promedios = [];
    for (const producto in mapa) {
        //Inicializo el objeto con el nombre del producto y valores iniciales
        let objPromedio = {
            producto: producto,
            precioPromedioConPromocion: 0,
            precioPromedioSinPromocion: 0
        };
        //Si el producto tiene comercios con promocion, calculo el precio promedio con promocion
        if(mapa[producto].cantidadComerciosConPromocion > 0) {
            objPromedio.precioPromedioConPromocion = mapa[producto].precioTotalConPromocion / mapa[producto].cantidadComerciosConPromocion;
        }
        //Y si el producto tiene comercios sin promocion, calculo el precio promedio sin promocion
        if(mapa[producto].cantidadComerciosSinPromocion > 0) {
            objPromedio.precioPromedioSinPromocion = mapa[producto].precioTotalSinPromocion / mapa[producto].cantidadComerciosSinPromocion;
        }
        //Finalmente agrego el objeto al array de promedios
        promedios.push(objPromedio);
    }
    return promedios;
}

module.exports = promediarPrecios;