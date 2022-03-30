/*

# Autor da solucao: Joel Guerreiro

Escreva um programa em que somente os usuários Alice ou Bob possam ser
cumprimentados com seus nomes ao realizar login. 

 */

import entrada from "readline-sync";

const testaUsuario = (user) => {
  let msg = ``;
  if (user === "Alice" || user === "Bob") {
    msg = `\nOlá ${user}, bem-vindo(a) de volta!\n`;
    return message;
  } else {
    msg = `\nUsuário não autorizado!\n`;
    return msg;
  }
}
let loginUsuario = entrada.question("\nLogin Usuário: ");
console.log(testaUsuario(loginUsuario));

