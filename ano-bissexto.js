/*
 * Algoritmo do Ano Bissexto
 * Autor: Joel Guerreiro
 *
 * Algoritmo utilizando manipulacao de datas com funcoes nativas do JavaScript
 *
 *
 *
 * */

//arrow function
const anoBissexto = ( paramData ) => {
  
  //extraindo somente o ano
  const ano_Atual = paramData.getFullYear();
  let resultado = ( ano_Atual % 4 === 0 ) ? 'Positivo, o ano e bissexto!' : 'Negativo, o ano nao e bissexto!';
  return resultado;

}

const dataHoje = new Date();
console.log( anoBissexto( dataHoje ) );
