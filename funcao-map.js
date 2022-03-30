/*

Autor: Joel Guerreiro

Estudo de função nativa 'map()' de arrays do JavaScript
O array de objetos contém informações populacionais de cidades da Estônia

*/

const cidadesDaEstonia = [
  { nome: "Rapla", pais: "Estônia", populacao: 13193, regiao: "Rapla é uma cidade na regiao central da Estônia" },
  { nome: "Tallinn", pais: "Estônia", populacao: 430805, regiao: "Tallin está situada na costa sul do golfo da Finlândia, no centro-norte da Estónia." },
  { nome: "Viljandi", pais: "Estônia", populacao: 17407, regiao: "Viljandi é um município urbano estoniano, que ocupa uma área de 14,6 km² do planalto de Sakala, no sul do país." },
  { nome: "Tartu", pais: "Estônia", populacao: 98449, regiao: "Tartu é a segunda maior cidade da Estônia e capital da região de Tartu." },
  { nome: "Rakvere", pais: "Estônia", populacao: 15526, regiao: "Rakvere é um município urbano estoniano localizado na região de Lääne-Virumaa." },
];

const imprimirCidades = (arrayCidades) => {

  const nomePopulacao = {
    nome: arrayCidades.nome,
    populacao: arrayCidades.populacao,
    regiao: arrayCidades.regiao,
  }



  // let infoCidades = `\nNome da cidade: ${nomeCidade} \n População: ${populacaoCidade} habitantes\n`;
  // console.log(infoCidades);
}

const cidades