/* 

# Autor da solucao: Joel Guerreiro

Somando valores de colecao de objetos com laco for, os valores
sao acessados pelo indice e atributo do objeto na iteracao;

*/

const somaValores = (colecao_carros) => {
  let total = 0;
  for (const carros of colecao_carros) {
    total += carros.preco;
  }
  let msg = `\nO somatorio dos valores do veiculos é igual a R$ ${total} reais.\n`;
  return msg;
}

//colecao de objetos 
const tabela_carros_anos90 = [
  { id: 1, nome: "Ford Escort Turbo", ano: 1999, preco: 32500 },
  { id: 2, nome: "Fiat Coupe Turbo", ano: 1992, preco: 28600 },
  { id: 3, nome: "Honda Accord Turbo", ano: 1995, preco: 53575 },
];

//chamando funcao
console.log(somaValores(tabela_carros_anos90));
