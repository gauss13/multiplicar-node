const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base:${base} No es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });
    });
};

let listarArchivo = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`== Tabla de ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


module.exports = { crearArchivo, listarArchivo }