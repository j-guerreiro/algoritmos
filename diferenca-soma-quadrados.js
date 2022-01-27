/* 

# Autor da solucao: Joel Guerreiro

Encontre a diferença entre a soma dos quadrados dos 100 primeiros numeros naturais e o quadrado da soma.

*/

function diferencaDeQuadrados() {
    let somaQuadrados = 0;
    let contador = 0;
    let quadradoSoma = 0;
    let diferenca = 0;
    for ( let i = 1 ; i <= 100 ; i++ ) {
         somaQuadrados += aoQuadrado( i );
         contador += i;
    }
    quadradoSoma = aoQuadrado( contador );
    diferenca = quadradoSoma - somaQuadrados;
    return diferenca;
}

console.log(diferencaDeQuadrados());

function aoQuadrado( n ) {
    return n * n;
}