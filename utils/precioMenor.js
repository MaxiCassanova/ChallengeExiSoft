//precioMenor se encarga de comparar los precios del producto que recibe por parametro
//Y retorna un objeto con el precio mas bajo y un array de String con los comercios que lo venden
const precioMenor = (productos, producto) => {
    //Inicio las variable precio en 0 para que no haya problemas con el primer producto
    let precioMinimo = 0;
    let comercios = [];
    for (let i = 0; i < productos.length; i++) {
        //Comparo los nombres de los productos con toLowerCase para evitar problemas con mayusculas y minusculas
        if(productos[i].producto.toLowerCase() == producto.toLowerCase()){
            const productoActual = productos[i];
            //Si es el primer producto, se asigna el precio y el comercio
            //Si no, se compara el precio del producto actual con el precio minimo
            //En caso de encontrar un nuevo minimo
            //Se asigna el nuevo precio minimo y se deja el array con el comercio actual
            if(precioMinimo == 0 || precioMinimo > productoActual.precio){
                precioMinimo = productoActual.precio;
                comercios = [productoActual.comercio];
                //En caso de encontrar un precio igual al minimo
                //Se agrega el comercio al array de comercios
            } else if(precioMinimo == productoActual.precio){
                comercios.push(productoActual.comercio);
            }
        }
    }
    //Retorna un objeto con el precio minimo y un array con los comercios que lo venden
    //para trabajar el objeto de forma mas sencilla
    return {
        precioMinimo,
        comercios
    }
}

module.exports = precioMenor;
