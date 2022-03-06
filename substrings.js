/* 

# Autor da solucao: Joel Guerreiro

Manipulacao de substrings

*/

function separaStrings(str1) {

  let strTrimmed = str1.trim();
  let nome_1 = strTrimmed.substr(0, 5);
  let nome_2 = strTrimmed.substr(6, 4);
  let nome_3 = strTrimmed.substr(10, 8);
  let nome_4 = strTrimmed.substr(18, 21);

  console.log("Nome 1: " + nome_1);
  console.log("Nome 2: " + nome_2);
  console.log("Nome 3: " + nome_3);
  console.log("Nome 4: " + nome_4);
}

let nomes = "Pedro Ana Roberta Carlos";

separaStrings(nomes);
