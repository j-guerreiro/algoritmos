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
const anoBissexto = (paramData) => {
  //extraindo somente o ano
  const anoAtual = paramData.getFullYear();
  let resultado = (anoAtual % 4 === 0) ? 'Positivo, o ano e bissexto!' : 'Negativo, o ano nao e bissexto!';
  return resultado;

}

const dataHoje = new Date();
console.log(anoBissexto(dataHoje));
