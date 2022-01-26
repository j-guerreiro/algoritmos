/* # Autor do programa: Joel Guerreiro

Dica para resolucao: https://www.youtube.com/watch?v=H4nOTvsv1JM

1. Escreva um programa que receba um número inteiro positivo na entrada e verifique se é primo;
2. Se o número for primo, imprima "primo".Caso contrário, imprima "nao primo";
3. Armazene em um vetor todos numeros primos encontrados de 1 até 100 e imprima;
4. Imprima quantos numeros primos e nao primos foram encontrados;


CONDICAO DOS NAO PRIMOS:

0. Todos numeros > 1
1. Todos numeros > 2 e seus multiplos que terminam com 0, 2, 4, 6, 8
2. Todos multiplos de 9 maiores que 3
3. Todos multiplos de 5 maiores que 5


PRIMOS de 1 ate 100:

[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

*/

function ePrimo( inteiroPos ) {
    //#1 todos numeros maiores que 1 e multiplos de 2
    if ( inteiroPos == 1 ) {
        return "nao primo";
    }
    if ( inteiroPos > 2 ) {
        cont = 2;
        for ( let i = 2 ; i < 9 ; i++ ) {
            if ( inteiroPos % cont == 0 ) {
            return "nao primo";
            }
            cont += 2;
        }
        //#2 maiores que 3 e seus multiplos
        if ( inteiroPos > 3  && inteiroPos % 9 == 0 ) {
            return "nao primo";
        }
        if ( inteiroPos > 3  && inteiroPos % 3 == 0 ) {
            return "nao primo";
        }
        //maiores que 7 e seus multiplos
        if ( inteiroPos > 7  && inteiroPos % 7 == 0 ) {
            return "nao primo";
        }
        //maiores que 5 e seus multiplos
        if ( inteiroPos > 5 && inteiroPos % 5 == 0 ) {
            return "nao primo";
        }
    }
    return "primo";
}
//teste com 100 numeros
let contPrimo = 0;
let contNaoPrimo = 0;
let arrayPrimos = [];
let cont = 1;

for ( let i = 1 ; i <= 100 ; i++ ) {
    resultado = ePrimo( i );
    console.log( "\nValor de entrada: " + i + " resultado: " + resultado + "\n" );
    //criando um array de primos
    if ( resultado == "primo") {
        arrayPrimos.push( i );
        contPrimo++;
    } else {
        contNaoPrimo++;
    }
}
console.log("--------------------------------------------------------------------------");
console.log( "Total de numeros primos = " + contPrimo + "\n" );
console.log( "Total de numeros nao primos = " + contNaoPrimo);
console.log("--------------------------------------------------------------------------\n");
console.log("Array de Numeros Primos de 1 ate 100: \n")
console.log("[" + arrayPrimos.join(",") + "]\n");
console.log("---------------------------------------------------------------------------");


