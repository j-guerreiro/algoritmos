/*
# Autor da solucao: Joel Guerreiro

Problema:

Se listarmos todos numeros naturais abaixo de 10 que sao multiplos de 3 ou 5, temos 3, 5, 6 e 9. A soma destes multiplos e 23.

Encontre a soma de todos os multiplos de 3 ou 5 abaixo de 1000.


 */
function somaMultiplos() {
    let soma = 0;
    for ( let i = 1; i < 1000 ; i++ ) {
        if ( i % 3 == 0 || i % 5 == 0 ) {
            soma += i;
        }
    }
    return "\nSoma dos multiplos de 3 ou 5 abaixo de 1000 é = " + soma + "!\n";
}
console.log(somaMultiplos());
