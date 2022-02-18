/* 

# Autor da solucao: Joel Guerreiro

Programa que utiliza a funcao replace para substituir parte de uma string

*/

function trocaString( texto ) {
  let nova_frase = texto.replace("Rings", "Lords");
  return nova_frase;
}
let frase = "\n\'The Lord of the Rings\'\n";

console.log(trocaString( frase ));