/*
 * Autor: Joel Guerreiro
 * 
 * The program arrow function gets the index of a substring 
 * parameter and creates a new one from it.
 * 
 * 
 * */


const stringCutter = (stringParam) => {
  
  const substrIndex = stringParam.indexOf("Lute");
  const newText = stringParam.substring(substrIndex);
  return newText;

}

let text = "Johann Sebastian Bach's Lute Suites for Classical Guitar";

let fcall = stringCutter(text);

console.log(fcall);
