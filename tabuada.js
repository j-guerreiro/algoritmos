/*

Autor: Joel Guerreiro

 1.Informe o numero que deseja saber a tabuada
 2.Escreva na tela o resultado

*/

import entrada from 'readline-sync';

const calculaTabuadas = (valor) => {

  let contador = 0;
  let aux = 0;
  let resultado;

  console.log(`\nTabuada do ${valor}\n`);
  while (contador <= 10) {
    aux = contador;
    resultado = aux * valor;
    console.log(`${valor} x ${contador} = ${resultado}`);
    contador++;
  }
  console.log(`\n`);
}

let numeroTabuada = entrada.question(`Informe o numero da tabuada: `);
calculaTabuadas(numeroTabuada);


