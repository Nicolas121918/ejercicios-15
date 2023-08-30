 require('colors');

function numerosPares(numeros) {
  if (!numeros || numeros.length === 0) {
    console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}'.bgWhite)
    console.log(('El arreglo de números está vacío.'));
    console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}'.bgWhite)
    return;
  }

  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  console.log((`Número de números pares: ${numerosPares.length}`.bgCyan));
  console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}+'.bgMagenta)
  console.log(('Números pares:'.bgCyan), numerosPares.join(', '));
  console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}'.bgWhite.red)
}

module.exports = {
  numerosPares,
};
