/*

Autor: Joel Guerreiro

Calculadora de conversoes de valores.

1. Entrar com um valor
2. Entrar com os dias de atraso
3. Caso tenha mais de 15 dias de atraso, aplicar 15% de juros ao valor informado
caso contrario aplicar 5% de juros ao valor.

*/

import entrada from 'readline-sync';

const calcularJuros = (valor, dias) => {



  let juros = dias > 15 ? valor * 0.15 : valor * 0.05;

  juros = Number(parseInt(juros));

  let montante = Number(parseInt(valor + juros)).toFixed(2);

  let resultado = `\nPrezado, \n o atraso de ${dias} dias no valor de R$ ${valor} \nfoi acrescido de juros de R$ ${juros} e o valor total com juros é de: R$ ${montante} \n`;

  return resultado;

}

const valorPagamento = Number(entrada.question("\nInforme o valor: \n"));
const diasAtraso = Number(entrada.question("\nInforme os dias de atraso: \n"));

console.log(calcularJuros(valorPagamento, diasAtraso));