/* 

# Autor da solucao: Joel Guerreiro

• A busca binária é um algoritmo mais eficiente, entretanto,
requer que a lista esteja ordenada pelos valores da chave de
busca.
• A ideia do algoritmo é a seguinte (assuma que a lista está
ordenada pelos valores da chave de busca):

• Verifique se a chave de busca é igual ao valor da posição do meio
da lista.
• Caso seja igual, devolva esta posição.

• Caso o valor desta posição seja maior que a chave, então repita o
processo, mas considere uma lista reduzida, com os elementos do
começo da lista até a posição anterior a do meio.

• Caso o valor desta posição seja menor que chave, então repita o
processo, mas considere uma lista reduzida, com os elementos da
posição seguinte a do meio até o final da lista.
*/

function buscaBinaria(lista, chave) {

  console.log("\n *Valor da chave de busca: ->" + chave +"<- *\n");
  //obtendo o indice do valor do meio da lista por divisao inteira  
  let valorMeio = parseInt(lista.length / 2);

  //indice da lista que corresponde ao valor seguinte ao valor do meio
  let seguinteMeio = valorMeio + 1;
  console.log("\n Indice do valor do meio da lista: [" + valorMeio + "]\n");
  console.log("\n Indice do valor seguinte ao indice do valor do meio: [" + seguinteMeio + "]\n");
  console.log("\n Valor do meio da lista de acordo com o indice: ->" + lista[valorMeio] + "<- \n");
  //percorrendo os indices da lista
  for ( let i = 0 ; i <= valorMeio ; i++) {
    //testando se a chave e igual ao valor da lista
    //caso o ultimo valor que eh o valor do meio seja igual a chave, imprima o valor
    if( chave === lista[i]) {
      return "Valor encontrado na lista! ->" + lista[i] + "<-\n";
    //caso o valor do meio da lista seja maior que a chave
    } else if ( valorMeio > chave ){
      for ( let i = 0 ; i < valorMeio ; i++) {
        if ( chave === lista[i]) {
          return "Valor encontrado na lista! ->" + lista[i] + "<-\n";
        }
      }
    //caso o valor do meio da lista seja menor que a chave
    } else if( valorMeio < chave ) {
      for ( let i = seguinteMeio ; i < lista.length ; i++) {
        if ( chave === lista[i]) {
          return "Valor encontrado na lista! ->" + lista[i] + "<-\n";
        }
      }
    } 
  }
  //caso o valor nao seja encontrado na lista
  return "Valor *NAO* encontrado na lista\n";
}
//valor de teste
const c = 87;
//lista deve estar ordenada
const l = [11, 13, 14, 65, 87, 90, 100, 150, 230];
console.log(buscaBinaria(l, c));

