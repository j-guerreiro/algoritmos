/* 

# Autor da solucao: Joel Guerreiro

If-else simples

*/


function compararString( str1, str2) {

  if ( str1.length === str2.length ) {
    return true
  }
  return false;
}

const string_1 = "LOTR";
const string_2 = "lotr";

console.log(compararString( string_1, string_2 ));