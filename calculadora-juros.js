/*

Autor: Joel Guerreiro

Calculadora de conversoes de valores.

1. Entrar com um valor
2. Entrar com os dias de atraso
3. Caso tenha mais de 15 dias de atraso, aplicar 15% de juros ao valor informado
caso contrario aplicar 5% de juros ao valor.
4. Validar entradas

*/

import entrada from 'readline-sync';

const calcularJuros = (valor, dias) => {


  let juros = (dias > 15) ? valor * 0.10 : valor * 0.05;

  juros = Number(parseInt(juros));

  let montante = Number(parseInt(valor + juros)).toFixed(2);

  let resultado = `\n\tPrezado, \n\n\t O atraso de ${dias} dia(s) no valor original de R$ ${valor.toFixed(2)} \n\n\tfoi acrescido de juros de R$ ${juros} e o valor total com juros é de: R$ ${montante} . \n`;

  return resultado;
}

let valorDivida = parseInt(entrada.question("\nInforme o valor devido em R$:...... "));

if (valorDivida > 0) {

  let diasAtraso = parseInt(entrada.question("\nInforme o tempo de atraso em dias:......  "));

  if (diasAtraso > 0) {
    console.log(calcularJuros(valorDivida, diasAtraso));
  }
  else {
    console.log(`Está em dia, vida que segue!`);
  }
}
else {
  console.log(`Valor inválido!`);
}
