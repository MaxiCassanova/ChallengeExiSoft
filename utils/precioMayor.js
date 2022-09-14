//Funcion Recorrer datos
//Guarda el precio mas alto con promocion y sin promocion
//Y vuelve repetir el proceso anterior
//Debe retornar el LENGTH de los array, no los mismos

const precioMayor = (productos, producto) => {
    //Inicio las variable precio en 0 para que no haya problemas con el primer producto
    let precioMayorSinPromocion = 0;
    let precioMayorConPromocion = 0;
    let comerciosSinPromocion = [];
    let comerciosConPromocion = [];
    for (let i = 0; i < productos.length; i++) {
        //Comparo los nombres de los productos con toLowerCase para evitar problemas con mayusculas y minusculas
        if(productos[i].producto.toLowerCase() == producto.toLowerCase()){
            const productoActual = productos[i];
            //Si consulta si tiene promocion, para saber con cuales variables trabajar
            if(productoActual.promocion){
                //Si es el primer producto, se asigna el precio y el comercio
                //Si no, se compara el precio del producto actual con el precio mayor
                //En caso de encontrar un nuevo mayor
                //Se asigna el nuevo precio mayor y se deja el array con el comercio actual
                if(precioMayorConPromocion === 0 || precioMayorConPromocion < productoActual.precio){
                    precioMayorConPromocion = productoActual.precio;
                    comerciosConPromocion = [productoActual.comercio];
                //En caso de encontrar un precio igual al mayor
                //Se agrega el comercio al array de comercios
                } else if(precioMayorConPromocion === productoActual.precio){
                    comerciosConPromocion.push(productoActual.comercio);
                }
            } else {
                //Aqui se repite la misma logica que en el if anterior, pero con las variables sin promocion
                if(precioMayorSinPromocion === 0 || precioMayorSinPromocion < productoActual.precio){
                    precioMayorSinPromocion = productoActual.precio;
                    comerciosSinPromocion = [productoActual.comercio];
                } else if(precioMayorSinPromocion === productoActual.precio){
                    comerciosSinPromocion.push(productoActual.comercio);
                }
            }
        }
    }
    //Finalmente, retorno un array con 2 objetos para los casos con y sin promocion
    //Cada objeto tiene el precio mayor y un array con la cantidad de comercios que lo venden
    return [
        {
            precioMayorSinPromocion,
            comerciosSinPromocion: comerciosSinPromocion.length
        },
        {
            precioMayorConPromocion,
            comerciosConPromocion: comerciosConPromocion.length
        }
    ]
}

module.exports = precioMayor;
