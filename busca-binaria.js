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

  //obtendo o indice do valor do meio da lista  
  let valorMeio = lista.length / 2;
  //atribuindo o valor do meio da lista a variavel
  valorMeio = lista[valorMeio];

  //percorrendo os indices da lista
  for ( let i = 0 ; i <= valorMeio ; i++) {

    //testando se a chave e igual ao valor da lista
    //caso o ultimo valor seja igual, imprime o valor
    if( chave === lista[i]) {
      console.log(valorMeio);
      break;
    } else if ( valorMeio > chave ){
  
    }
  }  
}

const c = 65;

//lista
const l = [11, 13, 14, 65, 87, 90];

buscaBinaria(l, c);

