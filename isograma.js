/*

# Autor da solucao: Joel Guerreiro

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

*/

function isIsogram( str ){
  let letra;
  let resultado = false;
  let cont = 0;
  for ( let i = 0 ; i < str.length ; i++ ) {
      letra = str[cont];
      cont++;
    for (let j = cont ; j < str.length ; j++ ){
        console.log( letra + " == " + str[j]);
        if ( str[j] != letra ) {
            resultado = true;
        } 
    }
  } return resultado;
}

//teste cases
const str = "Dermatoglyphics";
const str2 = "moOse";

console.log(isIsogram( str ));
