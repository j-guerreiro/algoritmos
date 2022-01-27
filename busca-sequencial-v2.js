/* 
# Autor da solucao: Joel Guerreiro

Algoritmo de busca sequencial em vetor/array de inteiros -  Autor : Joel Guerreiro
• A função deve receber uma lista de números inteiros e uma
chave para busca.

• A função deve retornar o índice da lista que contém a chave ou o
valor −1, caso a chave não esteja na lista.

*/

function busca(lista, chave) {
    for (let indice = 0; indice < lista.length; indice++) {
        if (lista[indice] == chave ){ 
            return indice;
        }
    };
    return -1;
}

const c = 32;
const l = [11, 14, 13, 65, 87, 23, 32];

console.log(busca(l, c));

