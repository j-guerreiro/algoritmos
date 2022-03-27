/*

Autor: Joel Guerreiro

Calculadora de PC

Entre com os valores solicitados e ao fim veja o total! =)

*/

import entrada from 'readline-sync';

const calculaPc = (arrayHardware) => {

  let header = `\n<============$$$$$$$$$$$$$$$============>\n\n\t CALCULADORA DE PC ver0.1 \n\n<============$$$$$$$$$$$$$$$============>\n`;
  console.log(header);
  let total = 0;
  for(const item of arrayHardware) {
    let preço = parseInt(entrada.question(item.mensagem));
    if (preço < 0){
      console.log(`Valor inválido`);
      break;
    }
    item.valor = preço;
    total += preço;
  }
  let msg = `\n<============$$$$$$$$$$$$$$$============>\n\n\tO valor total do seu pc é:
  \t->> R$ ${total.toFixed(2)} <<-\n\n<============$$$$$$$$$$$$$$$============>\n`;
  return msg;

};

let dots = "";
dots = dots.padStart(30, `.`);

let hardwareItens = [
  {valor:0, mensagem:`\nDigite o valor do processador/CPU:${dots}R$ `},
  {valor:0, mensagem:`\nDigite o valor da placa-mãe/MB:${dots}R$ `},
  {valor:0, mensagem:`\nDigite o valor da memória RAM:${dots}R$ `},
  {valor:0, mensagem:`\nDigite o valor do SSD:${dots}R$ `}, 
  {valor:0, mensagem:`\nDigite o valor do HD:${dots}R$ `},
  {valor:0, mensagem:`\nDigite o valor da FONTE:${dots}R$ `},
  {valor:0, mensagem:`\nDigite o valor da placa de vídeo/GPU:${dots}R$ `},
];

console.log(calculaPc(hardwareItens));
