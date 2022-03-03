/*

# Autor da solucao: Joel Guerreiro

Write a program that only the users Alice and Bob are greeted with their names.

 */

import entrada from "readline-sync";

function isAliceOrBob(user) {
  let message = ``;
  if (user === "Alice" || user === "Bob") {
    message = `\nHello ${user}, welcome back!\n`;
    return message;
  } else {
    message = `\nUnathorized User!\n`;
    return message;
  }
}
let usuario = entrada.question("\nUser: ");
console.log(isAliceOrBob(usuario));

