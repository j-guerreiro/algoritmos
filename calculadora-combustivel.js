/*
 *
 * Calculadora de Combustivel
 * 
 * Autor: Joel Guerreiro
 * 
 * A calculadora verifica se vale a pena ou nao utilizar etanol.
 * Basicamente o valor da gasolina deve ser divido pelo valor do etanol, o resultado é um valor unitário portanto
 * deverá ser multiplicado por 100.
 * 
 * Caso o valor do percentual obtido seja <= 70% é uma boa ideia utilizar o ETANOL.
 * Caso contrário, ou seja se o percentual for >= 70% é uma boa ideia utilizar GASOLINA.
 *
 * */


const calculaCombustivel = (precoGasolina, precoEtanol)  => {

  let calculo = Number((precoEtanol/ precoGasolina) * 100);
  let useEtanol = `\nABASTEÇA COM ETANOL! O preço (R$ ${precoGasolina}) informado do ETANOL é de ${calculo}% do valor da gasolina, pode abastecer com etanol\n`;
  let useGasolina =`\nABASTEÇA COM GASOLINA! O preço (R$ ${precoEtanol}) informado do ETANOL é de ${calculo}% do valor da gasolina!\n`;

  let resultado = calculo <= 70 ? useEtanol : useGasolina ;

  return resultado;
}

let gasolina = 7.60;
let etanol = 6.08;
console.log(calculaCombustivel(gasolina, etanol));