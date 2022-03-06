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

const printMessage = (text) => {
  let message = `\nHello, ${text} I'm an arrow function!\n`;
  return message;
}

const newText = `brave soul`;

console.log(printMessage(newText));

