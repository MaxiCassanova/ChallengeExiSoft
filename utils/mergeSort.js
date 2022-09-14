//mergeSort es una adaptacion del algoritmo MergeSort para ordenar un array de Productos
//Actualmente esta programado para ordenar por precio,
//pero se puede modificar para ordenar por cualquier clave del objeto Producto
const mergeSort = (productos, clave) => {
    if(productos.length < 2) {
        return productos;
    }
    const medio = Math.floor(productos.length / 2);
    const izquierda = productos.slice(0, medio);
    const derecha = productos.slice(medio);
    return merge(mergeSort(izquierda, clave), mergeSort(derecha, clave), clave);
}


const merge = (izquierda, derecha, clave) => {
    const resultado = [];
    while(izquierda.length && derecha.length) {
        if(izquierda[0][clave] <= derecha[0][clave]) {
            resultado.push(izquierda.shift());
        } else {
            resultado.push(derecha.shift());
        }
    }
    while(izquierda.length) {
        resultado.push(izquierda.shift());
    }
    while(derecha.length) {
        resultado.push(derecha.shift());
    }
    return resultado;
}

module.exports = mergeSort;
    

