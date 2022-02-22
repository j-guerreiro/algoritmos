/* 

# Autor da solucao: Joel Guerreiro

Somando valores de colecao de objetos com laco for, os valores
sao acessados pelo indice e atributo do objeto na iteracao;

*/

function somaValores( colecao_carros ) {
  //variaveis de escopo de bloco
  let total = 0;
  for ( let i = 0 ; i < colecao_carros.length ; i++ ) {
    total += colecao_carros[ i ].preco;
  }

  return "\nO somatorio dos valores do veiculos e igual a: R$ " + total + "\n" ;

}

//colecao de objetos 
const tabela_carros_anos90 = [
  { id: 1, nome: "Ford Escort Turbo", ano: 1999, preco:32500 },
  { id: 2, nome: "Fiat Coupe Turbo", ano: 1992, preco: 28600 },
  { id: 3, nome: "Honda Accord Turbo", ano: 1995, preco: 53575},];

//chamando funcao
console.log( somaValores( tabela_carros_anos90 ) );
