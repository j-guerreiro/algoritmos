/*
 *
 * Arrow Function Example
 * 
 * Autor: Joel Guerreiro
 * 
 * The arrow function, or function expression, takes a substring parameter, concatenates it with a string variable
 * and return it`s content;
 *
 * */


const arrow = ( text ) => {
  let message = "Hello, " + text + " i`m an arrow function!";
  return message;
}

const param = "brave soul";

console.log(arrow( param ));

