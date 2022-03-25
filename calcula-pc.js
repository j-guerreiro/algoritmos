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
let processador  = parseInt(entrada.question(`\nDigite o valor do processador/CPU:${dots}`));
let placaMae  = parseInt(entrada.question(`\nDigite o valor da placa-mãe/MB:${dots}`));
let memoriaRam  = parseInt(entrada.question(`\nDigite o valor da memória RAM:${dots}`));
let discoSolido  = parseInt(entrada.question(`\nDigite o valor do SSD:${dots}`));
let discoRigido  = parseInt(entrada.question(`\nDigite o valor do HD:${dots}`));
let fonteEnergia  = parseInt(entrada.question(`\nDigite o valor da FONTE:${dots}`));
let placaDeVideo  = parseInt(entrada.question(`\nDigite o valor da placa de vídeo/GPU:${dots}`));

console.log(calculaPc(processador, placaMae, memoriaRam, discoSolido, discoRigido, fonteEnergia, placaDeVideo));