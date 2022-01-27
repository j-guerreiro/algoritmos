/*

# Autor da solucao: Joel Guerreiro

Write a program that only the users Alice and Bob are greeted with their names.

 */

import entrada from "readline-sync";

function isAliceOrBob( user ) {
    if ( user == "Alice" || user == "Bob" ) {
        return "\nHello " + user + "!\n";
    } else {
        return "\nUnathorized User!\n";
    }
}
let usuario = entrada.question("\nuser: ");
console.log(isAliceOrBob(usuario));

