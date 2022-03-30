/*

Autor: Joel Guerreiro

Estudo de função nativa de arrays do JavaScript
O array de objetos contém informações populacionais de cidades da Estônia

*/

const cidadesDaEstonia = [
  { nome: "Rapla", pais: "Estônia", populacao: 13193 },
  { nome: "Tallinn", pais: "Estônia", populacao: 430805 },
  { nome: "Viljandi", pais: "Estônia", populacao: 17407 },
  { nome: "Tartu", pais: "Estônia", populacao: 98449 },
  { nome: "Rakvere", pais: "Estônia", populacao: 15526 },
];

const imprimirCidades = (arrayCidades) => {
  let nomePais = arrayCidades.pais;
  let nomeCidade = arrayCidades.nome;
  let populacaoCidade = arrayCidades.populacao;
  let infoCidades = `\n Nome do país: ${nomePais} \n Nome da cidade: ${nomeCidade} \n População: ${populacaoCidade} habitantes\n`;
  console.log(infoCidades);
}

cidadesDaEstonia.forEach(imprimirCidades);