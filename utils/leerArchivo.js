const fs = require('fs');

// Lee el archivo datos.csv y devuelve un array de lineas de texto para su posterior uso
const leerArchivo = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    return data.split('\r\n');
}

module.exports = leerArchivo;