//Algoritmo de busca simples em vetor/array de inteiros -  Autor : Joel Guerreiro


/*
• A função deve receber uma lista de números inteiros e uma
chave para busca.

• A função deve retornar o índice da lista que contém a chave ou o
valor −1, caso a chave não esteja na lista.
*/


function busca(lista, chave) {
    let encontrado = 0;
    for (let indice = 0; indice < lista.length; indice++) {
        lista[indice] == chave ? encontrado = indice : encontrado = -1;
    };

    encontrado > 0 ? console.log("\nValor encontrado no vetor! \nIndice no vetor =  [" + encontrado + "]\n")
     : console.log("\nValor nao encontrado, indice =  [" + encontrado + "]\n");
}

c = 14;
l = [10, 14, 100, 65, 87, 20, 30];

busca(l, c);

