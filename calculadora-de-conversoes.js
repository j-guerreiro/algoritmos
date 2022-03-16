/*

Autor: Joel Guerreiro

Calculadora de conversoes de valores.

1. Selecionar a opcao
2. Entrar com o valor a ser convertido
3. Apresentar o resultado da conversao
4. Enquanto a opcao nao for sair, apresentar opcoes de conversao, 
senao, encerrar o programa.

*/

import entrada from 'readline-sync';

//1
const celsiusParaFahrenheit = (celsius) => {

  console.log("Celsius para Fahrenheit");
  let resultado = celsius

}
//2
const fahrenheitParaCelsius = (fahrenheit) => {

}
//3
const celsiusParaKelvin = (celsius) => {

}
//4
const kelvinParaCelsius = (kelvin) => {

}
//5
const fahrenheitParaKelvin = (fahrenheit) => {

}
//5
const kelvinParaFahrenheit = (kelvin) => {

}
//6
const kmParaMilhas = (km) => {

}
//7
const milhasParaKm = (milhas) => {

}
//opcoes
const opcoes = () => {
  conversoes = [
    { opcao: "(1) Celsius para Fahrenheit" },
    { opcao: "(2) Fahrenheit para Celsius" },
    { opcao: "(3) Celsius para Kelvin" },
    { opcao: "(4) Kelvin para Celsius" },
    { opcao: "(5) Fahrenheit para Kelvin" },
    { opcao: "(6) Kelvin para Fahrenheit" },
    { opcao: "(7) Quilômetros para Milhas" },
    { opcao: "(8) Milhas para Quilômetros" },
    { opcao: "(9) Sair" },
  ]

  for (const opcao of conversoes) {
    console.log(opcao)
  }
}

const escolhaCaso = (opcaoEscolhida) => {
  switch (opcaoEscolhida) {
    case 1:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(celsiusParaFahrenheit(valor))
      break;

    default:
      break;
  }
}

do {
  console.log("Calculadora de Múltiplas Conversões");
  console.log(opcoes());
  let opcao = opcao.question("Escolha uma opção: ");
  console.log(escolhaCaso(opcao))

} while (opcao != 8)

