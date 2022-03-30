/*

Autor: Joel Guerreiro

Estudo de função nativa 'filter()' de arrays do JavaScript
A funcao filter cria um novo array a partir do original após executar um filtro lógico.

*/
const cidadesDaEstonia = [
  { id: 13, nome: "Rapla", pais: "Estônia", populacao: 13193, regiao: "Rapla é uma cidade na regiao central da Estônia." },
  { id: 430, nome: "Tallinn", pais: "Estônia", populacao: 430805, regiao: "Tallin está situada na costa sul do golfo da Finlândia, no centro-norte da Estónia." },
  { id: 17, nome: "Viljandi", pais: "Estônia", populacao: 17407, regiao: "Viljandi é um município urbano estoniano, que ocupa uma área de 14,6 km² do planalto de Sakala, no sul do país." },
  { id: 984, nome: "Tartu", pais: "Estônia", populacao: 98449, regiao: "Tartu é a segunda maior cidade da Estônia e capital da região de Tartu." },
  { id: 15, nome: "Rakvere", pais: "Estônia", populacao: 15526, regiao: "Rakvere é um município urbano estoniano localizado na região de Lääne-Virumaa." },
];

const retornaIdPar = (arrayCidades) => {

  if (arrayCidades.id % 2 === 0) {
    let msg = `\n Id cidade: ${arrayCidades.id} \n Nome do país: ${arrayCidades.pais} \n Nome da cidade: ${arrayCidades.nome} \n População: ${arrayCidades.populacao} habitantes\n`;
    console.log(msg);
    return arrayCidades;
  };
}

const cidadesPares = cidadesDaEstonia.filter(retornaIdPar);
console.log(cidadesPares);