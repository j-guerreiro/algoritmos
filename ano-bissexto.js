/*
 * Algoritmo do Ano Bissexto
 * Autor: Joel Guerreiro
 *
 * Algoritmo utilizando manipulacao de datas com funcoes nativas do JavaScript
 * para descobrir se o ano atual é bissexto ou não.
 *
 *
 *
 * */


const anoBissexto = (data) => {
  const anoAtual = data.getFullYear();
  let resultado = (anoAtual % 4 === 0) ? `\nPositivo, o ano ${anoAtual} é bissexto!\n` : `\nNegativo, o ano ${anoAtual} não é bissexto!\n`;
  return resultado;

}

const dataHoje = new Date();
console.log(anoBissexto(dataHoje));
