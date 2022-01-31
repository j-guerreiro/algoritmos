/*

# Autor da solucao: Joel Guerreiro

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

*/

function isIsogram( str ){
  let letra;
  let cont = 1;
  let resultado = false;
  for ( let i = 0 ; i < str.length ; i++ ) {
    letra = str[i];
    for (let j = 1 ; j < str.length ; j++ ){
        if ( str[j] != letra ) {
            continue;
        } else {
            break;
        } 
    }
  } return resultado;
}

//teste cases
const str = "Dermatoglyphics";
const str2 = "moOse";

console.log(isIsogram( str ));
