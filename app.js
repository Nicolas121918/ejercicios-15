const { numerosPares } = require('./proy_modules/functions.js');
const colors = require('colors');

const numeros = [5, 4, 3,  2, 100, 64];
console.log(colors.white('ANALISIS DEL ARREGLO DE NUMEROS'), numeros);
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'.bgWhite.red);

numerosPares(numeros);
