//Funcion promediar precios por producto
//Mapa con un objeto que contenga el precio total (Con y Sin promocion) y la cantidad de comercios que lo venden (con y sin promocion)
//Promediar precio con la cantidad de comercio al retornar

const crearMapa = (productos) => {
    let mapa = {};
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if(!mapa[producto.producto]) {
            mapa[producto.producto] = {
                precioTotal: 0,
                precioTotalPromo: 0,
                cantidadComercios: 0,
                cantidadComerciosPromo: 0
            };
        }
        if(producto.promocion) {
            mapa[producto.producto].precioTotalPromo += producto.precio;
            mapa[producto.producto].cantidadComerciosPromo++;
        } else {
            mapa[producto.producto].precioTotal += producto.precio;
            mapa[producto.producto].cantidadComercios++;
        }
    }
    return mapa;
}

const promediarPrecios = (productos) => {
    let mapa = crearMapa(productos);
    let promedios = [];
    for (const producto in mapa) {
        let objPromedio = {
            producto: producto,
            precioPromedioConPromocion: 0,
            precioPromedioSinPromocion: 0
        };
        if(mapa[producto].cantidadComerciosPromo > 0) {
            objPromedio.precioPromedioConPromocion = mapa[producto].precioTotalPromo / mapa[producto].cantidadComerciosPromo;
        }
        if(mapa[producto].cantidadComercios > 0) {
            objPromedio.precioPromedioSinPromocion = mapa[producto].precioTotal / mapa[producto].cantidadComercios;
        }
        promedios.push(objPromedio);
    }
    return promedios;
}

module.exports = promediarPrecios;