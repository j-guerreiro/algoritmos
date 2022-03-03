/*

Autor: Joel Guerreiro

Calculadora de percentual e juros sobre valor informado.

1. Entrar com um valor numerico ( capital )
2. Entrar com o percentual ( taxa de juros )
3. Imprimir o percentual sobre o valor informado. ( juros sobre o valor informado )
4. Imprimir o valor + juros. ( montante = capital + juros )

*/

import entrada from 'readline-sync';

function calculaJuros(capital, taxaJuros, padsDots) {
  let inPads = padsDots;
  let juros = 0;
  let montante = 0;
  juros = (capital * (taxaJuros / 100)).toFixed(2);
  montante = (parseFloat(capital) + parseFloat(juros)).toFixed(2);
  console.log(`\nJuros sobre o valor ${inPads} R$ ${juros}\n`);
  console.log(`\nValor do montante ( capital + juros ) ${inPads} R$ ${montante}\n`);
}

let outPads = "";
outPads = outPads.padStart(30, `.`);
let valorNumerico = 0;
let taxa = 0;
valorNumerico = entrada.question(`\nInforme um valor R$ ${outPads} `);
taxa = entrada.question(`\nInforme a taxa de juros em % ${outPads} `);
calculaJuros(valorNumerico, taxa, outPads);