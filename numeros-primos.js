/* 

Escreva um programa que receba um número inteiro positivo na entrada e verifique se é primo. 
Se o número for primo, imprima "primo". 
Caso contrário, imprima "não primo".

*/

function ePrimo( inteiroPos ) {

    // nao pode ser 2,3 ou 5
    if ((inteiroPos % 2 == 0 || inteiroPos % 3 == 0 || inteiroPos % 5 == 0) || ( inteiroPos != 2 && inteiroPos != 3 && inteiroPos != 5))  {
        return "nao primo";
    }
    return "primo";
}
let n = 2;
let n2 = 2;


console.log( ePrimo( n ));

/*
for ( let i = 0 ; i < 10 ; i++) {

    n = n + n2;
    console.log("\nValor de N = " + n + "\n");
    console.log(ePrimo( n ));
}
*/

