/*

Autor: Joel Guerreiro

Calculadora de PC

1. Selecionar a opcao
2. Entrar com o valor a ser convertido
3. Apresentar o resultado da conversao
4. Enquanto a opcao nao for sair, apresentar opcoes de conversao, 
senao, encerrar o programa.

*/

import entrada from 'readline-sync';

const calculaPc = (cpu, motherboard, ram, ssd, hd, psu, gpu) => {

  let total = cpu + motherboard + ram + ssd + psu + gpu;

  let msg = `O valor total do seu pc é : ${total}`;

  return msg;

};

let dots = 
let processador  = parseInt(entrada.question("\nDigite o valor do processador/CPU: "));
let placaMae  = parseInt(entrada.question("\nDigite o valor da placa-mãe/MB: "));
let memoriaRam  = entrada.question("\nDigite o valor da memória RAM: ");
let discoSolido  = entrada.question("\nDigite o valor do SSD: ");
let discoRigido  = entrada.question("\nDigite o valor do HD: ");
let fonteEnergia  = entrada.question("\nDigite o valor da FONTE: ");
let placaDeVideo  = entrada.question("\nDigite o valor da placa de vídeo/GPU: ");

console.log(calculaPc(processador, placaMae, memoriaRam, discoSolido, discoRigido, fonteEnergia, placaDeVideo));