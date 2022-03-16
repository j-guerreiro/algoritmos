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

  console.log("\n   ->Celsius para Fahrenheit<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = ((celsius * 1.8) + 32).toFixed(2);
  let resultado = `\n | ${celsius}°C equivalem a => ${conversao}°F | \n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");

}
//2
const fahrenheitParaCelsius = (fahrenheit) => {

  console.log("\n   ->Fahrenheit para Celsius<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = ((fahrenheit - 32) / 1.8).toFixed(2);
  let resultado = `\n | ${fahrenheit}°F equivalem a => ${conversao}°C | \n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");

}
//3
const celsiusParaKelvin = (celsius) => {

  console.log("\n   ->Celsius para Kelvin<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = (celsius + 273.15).toFixed(2);
  let resultado = `\n ${celsius}°C equivalem a => ${conversao}°F\n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");


}
//4
const kelvinParaCelsius = (kelvin) => {

  console.log("\n   ->Kelvin para Celsius<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = (kelvin - 273.15).toFixed(2);
  let resultado = `\n ${kelvin}°K equivalem a => ${conversao}°C\n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");


}
//5
const fahrenheitParaKelvin = (fahrenheit) => {

  console.log("\n   ->Fahrenheit para Kelvin<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = (((fahrenheit - 32) * 1.8) + 273.15).toFixed(2);
  let resultado = `\n ${fahrenheit}°F equivalem a => ${conversao}°K\n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");


}
//6
const kelvinParaFahrenheit = (kelvin) => {

  console.log("\n   ->Kelvin para Fahrenheit<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = (((kelvin - 273.15) * 1.8) + 32).toFixed(2);
  let resultado = `\n ${kelvin}°K equivalem a => ${conversao}°F\n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");


}
//7
const kmParaMilhas = (km) => {

  console.log("\n       ->Km/h para Mp/h<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = (km / 1.609).toFixed(2);
  let resultado = `\n ${km}Km/h equivalem a => ${conversao}Mp/h\n`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");


}
//8
const milhasParaKm = (milhas) => {

  console.log("\n       ->Mp/h para Km/h<-   ");
  console.log("<=========== RESULTADO ===========>");
  let conversao = milhas * 1.609;
  let resultado = `\n ${km}Mph equivalem a => ${conversao}Km/h`;
  console.log(resultado);
  console.log("<=========== RESULTADO ===========>\n\n");

}
//opcoes
const opcoes = () => {
  const opcoes = [
    { chave: "<=Calculadora de Múltiplas Conversões=>" },
    { chave: "                                     " },
    { chave: "    Selecione uma opção de 1 a 9     " },
    { chave: "                                     " },
    { chave: "<==== GRANDEZAS DE TEMPERATURAS ====>" },
    { chave: "                                     " },
    { chave: "(1) Celsius para Fahrenheit - (C) => (F)" },
    { chave: "(2) Fahrenheit para Celsius - (F) => (C)" },
    { chave: "(3) Celsius para Kelvin     - (C) => (K)" },
    { chave: "(4) Kelvin para Celsius     - (K) => (C)" },
    { chave: "(5) Fahrenheit para Kelvin  - (F) => (K)" },
    { chave: "(6) Kelvin para Fahrenheit  - (K) => (F)" },
    { chave: "                                        " },
    { chave: "<==== GRANDEZAS DE VELOCIDADE ====>" },
    { chave: "                                      " },
    { chave: "(7) Quilômetros para Milhas - (Km/h)=> (Mph)" },
    { chave: "(8) Milhas para Quilômetros - (Mph) => (Km/h)" },
    { chave: "                                      " },
    { chave: "<=" },
    { chave: "                                      " },
    { chave: "(9) Sair" },
    { chave: "                                      " },
  ];

  for (const opcao of opcoes) {
    console.log(opcao.chave);
  }
}

const escolhaCaso = (opcaoEscolhida) => {
  let valor = 0;
  switch (opcaoEscolhida) {
    case 1:
      valor = Number(entrada.question("Entre com o valor: "));
      celsiusParaFahrenheit(valor);
      break;

    case 2:
      valor = Number(entrada.question("Entre com o valor: "));
      fahrenheitParaCelsius(valor);
      break;

    case 3:
      valor = Number(entrada.question("Entre com o valor: "));
      celsiusParaKelvin(valor);
      break;

    case 4:
      valor = Number(entrada.question("Entre com o valor: "));
      kelvinParaCelsius(valor);
      break;

    case 5:
      valor = Number(entrada.question("Entre com o valor: "));
      fahrenheitParaKelvin(valor);
      break;

    case 6:
      valor = Number(entrada.question("Entre com o valor: "));
      kelvinParaFahrenheit(valor);
      break;

    case 7:
      valor = Number(entrada.question("Entre com o valor: "));
      kmParaMilhas(valor);
      break;

    case 8:
      valor = Number(entrada.question("Entre com o valor: "));
      milhasParaKm(valor);
      break;

    case 9:
      console.log("Saindo...");
      break;

    default:
      break;
  }
}

let opcao;

while (opcao != 9) {
  opcoes();
  opcao = Number(entrada.question("Escolha uma opção: "));
  escolhaCaso(opcao);
}
