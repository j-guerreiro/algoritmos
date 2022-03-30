/*

Autor: Joel Guerreiro

Estudo de função nativa 'map()' de arrays do JavaScript
A funcao map cria um novo array a partir do original

*/
const cidadesDaEstonia = [
  { nome: "Rapla", pais: "Estônia", populacao: 13193, regiao: "Rapla é uma cidade na regiao central da Estônia." },
  { nome: "Tallinn", pais: "Estônia", populacao: 430805, regiao: "Tallin está situada na costa sul do golfo da Finlândia, no centro-norte da Estónia." },
  { nome: "Viljandi", pais: "Estônia", populacao: 17407, regiao: "Viljandi é um município urbano estoniano, que ocupa uma área de 14,6 km² do planalto de Sakala, no sul do país." },
  { nome: "Tartu", pais: "Estônia", populacao: 98449, regiao: "Tartu é a segunda maior cidade da Estônia e capital da região de Tartu." },
  { nome: "Rakvere", pais: "Estônia", populacao: 15526, regiao: "Rakvere é um município urbano estoniano localizado na região de Lääne-Virumaa." },
];

const imprimirInformacoes = (arrayCidades) => {
  const informacoesExtras = {
    nome: arrayCidades.nome,
    regiao: arrayCidades.regiao,
  }

  let msg = `\nNome da cidade: ${informacoesExtras.nome} \n Região Administrativa: ${informacoesExtras.regiao}\n`;
  console.log(msg);
}

const informacoesExtras = cidadesDaEstonia.map(imprimirInformacoes);