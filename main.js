//Importaciones de modulos (Cada uno de ellos esta creado en un archivo separado, para mantener el orden en Main).
const leerArchivo = require('./utils/leerArchivo');
const crearProductos = require('./utils/productos');
const ordenarPorPrecio = require('./utils/ordenarPorPrecio');
const precioMenor = require('./utils/precioMenor');
const precioMayor = require('./utils/precioMayor');
const mejoresPrecios = require('./utils/mejoresPrecios');
const promediarPrecios = require('./utils/promediarPrecios');
const cantidadProductosComercio = require('./utils/cantidadProductosComercio');


//Crea un array de Productos a partir de un archivo csv.
//La funcion leer archivo devuelve un array de lineas de texto.
//La funcion crearProductos crea un array de objetos Producto a partir del array de lineas de texto.
const productos = crearProductos(leerArchivo('./datos.csv'));

//La funcion ordenarPorPrecio recibe el array de productos y retorna un mapa.
//Cada clave del mapa es un comercio y el valor es el array de productos de ese comercio ordenados por precio.

const mapaPreciosAsc = ordenarPorPrecio(productos);


//Imprime el mapa en la consola.
//Primero imprime la clave del mapa, luego el array de productos de ese comercio.

for (const comercio in mapaPreciosAsc) {
    console.log(comercio);
    console.table(mapaPreciosAsc[comercio], ['id', 'producto', 'precio', 'comercio', 'promocion']);
}


//La funcion precioMenor recibe el array de productos y el nombre del producto a buscar.
//Retorna un objeto con 2 propiedades: el precio minimo del producto y los comercios que lo venden a dicho precio

const objPrecioMenor = precioMenor(productos, 'parlante JVC');
console.log(objPrecioMenor);

//La funcion precioMayor recibe el array de productos y el nombre del producto a buscar.
//Retorna un array con 2 objetos, cada uno de ellos para los casos con o sin promocion.
//Los objetos a su vez, tienen 2 propiedades: el precio maximo del producto y la cantidad de comercios que lo venden a dicho precio

const arrPrecioMayor = precioMayor(productos, 'parlante JVC');
console.log('Precio sin promocion:', arrPrecioMayor[0].precioMayorSinPromocion);
console.log('Cantidad de locales sin promocion:', arrPrecioMayor[0].comerciosSinPromocion);
console.log('Precio con promocion:', arrPrecioMayor[1].precioMayorConPromocion);
console.log('Cantidad de locales con promocion:', arrPrecioMayor[1].comerciosConPromocion);


//La funcion mejoresPrecios recibe el array de productos y del comercio.
//Retorna un array de Productos donde el comercio tiene los mejores precios.

const arrMejoresPrecios = mejoresPrecios(productos, 'Garbarino');
console.table(arrMejoresPrecios);


//La funcion promediarPrecios recibe el array de productos.
//Y retorna un array de objetos con 3 propiedades:
//  El nombre del producto
//  El precio promedio del producto sin promocion. En caso de que no haya productos sin promocion, el precio promedio es 0.
//  El precio promedio del producto con promocion. En caso de que no haya productos con promocion, el precio promedio es 0.

const arrPromedios = promediarPrecios(productos);
console.table(arrPromedios);


//La funcion cantidadProductosComercio recibe el array de productos y el nombre del comercio.
//Devuelve un entero con la cantidad de productos que vende el comercio.

const cantidadProductos1 = cantidadProductosComercio(productos, 'Garbarino');
console.log('Cantidad de productos de Garbarino', cantidadProductos1);
const cantidadProductos2 = cantidadProductosComercio(productos, 'Cetrogar');
console.log('Cantidad de productos de Cetrogar', cantidadProductos2);
