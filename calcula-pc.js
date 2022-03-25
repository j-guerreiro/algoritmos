/*

Autor: Joel Guerreiro

Calculadora de PC

Entre com os valores solicitados e ao fim veja o total! =)

*/

import entrada from 'readline-sync';

const calculaPc = (cpu, motherboard, ram, ssd, hd, psu, gpu) => {

  let total = cpu + motherboard + ram + ssd + psu + gpu;
  
  let msg = `O valor total do seu pc é : ${total}`;

  return msg;

};

let dots = "";
dots = dots.padStart(30, `.`);
let processador  = parseInt(entrada.question(`\nDigite o valor do processador/CPU:${dots}R$ `));
let placaMae  = parseInt(entrada.question(`\nDigite o valor da placa-mãe/MB:${dots}R$ `));
let memoriaRam  = parseInt(entrada.question(`\nDigite o valor da memória RAM:${dots}R$ `));
let discoSolido  = parseInt(entrada.question(`\nDigite o valor do SSD:${dots}R$ `));
let discoRigido  = parseInt(entrada.question(`\nDigite o valor do HD:${dots}R$ `));
let fonteEnergia  = parseInt(entrada.question(`\nDigite o valor da FONTE:${dots}R$ `));
let placaDeVideo  = parseInt(entrada.question(`\nDigite o valor da placa de vídeo/GPU:${dots}R$ `));
console.log(`\n`);

console.log(calculaPc(processador, placaMae, memoriaRam, discoSolido, discoRigido, fonteEnergia, placaDeVideo));