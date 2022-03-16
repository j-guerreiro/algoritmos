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
  let conversao = (celsius * 1.8) + 32;
  let resultado = `Celsius ${celsius} => Fahrenheit: ${conversao}`;
  return resultado;

}
//2
const fahrenheitParaCelsius = (fahrenheit) => {

  console.log("Fahrenheit para Celsius");
  let conversao = (fahrenheit - 32) / 1.8;
  let resultado = `Fahrenheit ${fahrenheit} => Celsius: ${conversao}`;
  return resultado;

}
//3
const celsiusParaKelvin = (celsius) => {

  console.log("Celsius para Kelvin");
  let conversao = (celsius + 273.15);
  let resultado = `Celsius ${celsius} => Fahrenheit: ${conversao}`;
  return resultado;

}
//4
const kelvinParaCelsius = (kelvin) => {

  console.log("Celsius para Celsius");
  let conversao = (kelvin - 273.15);
  let resultado = `Kelvin ${kelvin} => Celsius: ${conversao}`;
  return resultado;

}
//5
const fahrenheitParaKelvin = (fahrenheit) => {

  console.log("Fahrenheit para Kelvin");
  let conversao = ((fahrenheit - 32) * 1.8) + 273.15;
  let resultado = `Fahrenheit ${fahrenheit} => Kelvin: ${conversao}`;
  return resultado;

}
//6
const kelvinParaFahrenheit = (kelvin) => {

  console.log("Kelvin para Fahrenheit");
  let conversao = ((kelvin - 273.15) * 1.8) + 32;
  let resultado = `Kelvin ${kelvin} => Fahrenheit: ${conversao}`;
  return resultado;

}
//7
const kmParaMilhas = (km) => {

  console.log("Quilômetros para Milhas");
  let conversao = km / 1.609;
  let resultado = `Quilômetros ${km} => Milhas: ${conversao}`;
  return resultado;

}
//8
const milhasParaKm = (milhas) => {

  console.log("Quilômetros para Milhas");
  let conversao = milhas * 1.609;
  let resultado = `Milhas ${km} => Quilômetros: ${conversao}`;
  return resultado;

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
  ];

  for (const opcao of conversoes) {
    console.log("\n" + opcao + "\n");
  }
}

const escolhaCaso = (opcaoEscolhida) => {
  switch (opcaoEscolhida) {
    case 1:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(celsiusParaFahrenheit(valor));
      break;

    case 2:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(fahrenheitParaCelsius(valor));
      break;

    case 3:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(celsiusParaKelvin(valor));
      break;

    case 4:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(kelvinParaCelsius(valor));
      break;

    case 5:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(fahrenheitParaKelvin(valor));
      break;

    case 6:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(kelvinParaFahrenheit(valor));
      break;

    case 7:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(kmParaMilhas(valor));
      break;

    case 8:
      let valor = Number(entrada.question("Entre com o valor: "));
      console.log(milhasParaKm(valor));
      break;

    case 9:
      console.log("Saindo...");
      break;

    default:
      break;
  }
}

do {
  console.log("Calculadora de Múltiplas Conversões");
  console.log(opcoes());
  let opcao = opcao.question("Escolha uma opção: ");
  console.log(escolhaCaso(opcao));

} while (opcao != 9)

