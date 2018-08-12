const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// const express = require('express');
const { crearArchivo, listarArchivo } = require('./multiplicar/mutiplicar');

// let base = 'q9';

// console.log(crearArchivo);
// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv);
console.log('limite : ' + argv.limite);

let comando = argv._[0];


switch (comando) {
    case 'listar':

        listarArchivo(argv.base, argv.limite)


        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no reconocido');
}


// console.log(argv2);