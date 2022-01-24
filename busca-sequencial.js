//Algoritmo de busca simples em vetor/array de inteiros -  Autor : Joel Guerreiro


/*
• A função deve receber uma lista de números inteiros e uma
chave para busca.

• A função deve retornar o índice da lista que contém a chave ou o
valor −1, caso a chave não esteja na lista.
*/

function busca(lista, chave) {
    let encontrado;
    for (let indice = 0; indice < lista.length; indice++) {
        let aux = lista[indice];
        if (aux == chave ){ 
            encontrado = indice; break;
        } 
        else {
            encontrado = -1;
        }
    };
    console.log("\nResultado da busca = [" + encontrado + "]\n");
}

const c = 13;
const l = [11, 14, 13, 65, 87, 23, 32];

busca(l, c);

