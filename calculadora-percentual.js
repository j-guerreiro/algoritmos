/*

Autor: Joel Guerreiro

Calculadora de percentual e juros sobre valor informado.

1. Entrar com um valor numerico ( capital )
2. Entrar com o percentual ( taxa de juros )
3. Imprimir o percentual sobre o valor informado. ( juros sobre o valor informado )
4. Imprimir o valor + juros. ( montante = capital + juros )

*/

import entrada from 'readline-sync';

function calculaJuros( capital, taxaJuros ) {
  let juros = 0;
  juros = capital * ( taxaJuros / 100 );
  let montante = 0; 
  montante = parseFloat( capital ) + parseFloat( juros ); 
  console.log( "\nJuros sobre o valor \n\t---> R$ " + juros + "\n");
  console.log( "Valor do montante ( capital + juros ) \n\t---> R$ " + montante + "\n");
}

let valorNumerico = 0;
let taxa = 0;
valorNumerico = entrada.question("\nInforme um valor R$\n\t ---> ");
taxa = entrada.question("\nInforme a taxa de juros em %\n\t ---> ");
calculaJuros( valorNumerico, taxa );