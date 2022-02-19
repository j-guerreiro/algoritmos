/*
 * Autor: Joel Guerreiro
 * Algoritmo que faz a troca de uma substring de uma string.
 * */
function trocaString( stringTexto ) {
  let textoNovo = stringTexto.replace( stringTexto.substr( 10, 10 ), "JS" );
  return textoNovo;
}

const varTexto = "\nAprender JavaScript é gratificante!\nA linguagem JavaScript é bastante requisitada nas empresas, \ntanto no Brasil como nos países estrangeiros!\n";

console.log( trocaString( varTexto ) );
