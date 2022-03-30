/*

Autor: Joel Guerreiro

 1.Informe o numero que deseja saber a tabuada
 2.Escreva na tela o resultado

*/

import entrada from 'readline-sync';

const tabuada = (valor) => {

  let contador = 0;
  let aux = 0;
  let resultado;

  while (contador <= 10) {
    aux = contador;
    result = aux * valor;
    console.log(`Valor: ${valor} = ${contador} = ${resultado}`);
    contador++;
  }
}

let numeroTabuada = entrada.question(`Informe o numero da tabuada: `);
console.log(tabuada(numeroTabuada));


