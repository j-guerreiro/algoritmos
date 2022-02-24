/*
 *
 * Arrow Function Example
 * 
 * Autor: Joel Guerreiro
 * 
 * The arrow function receives a parameter and returns a new variable concatenated
 * 
 *
 * */

const vampire_greeter = ( vname ) => {
  let demonGuard = "*Castle Guard Demon* says: "
  demonGuard = demonGuard.padEnd( 50, ".");
  let message = "\n" + demonGuard + "\'Hello master" + vname + ", welcome back to Castlevania!\'" + "\n";
  return message;
}

let vampireName = vampire_greeter(" Alucard " );
console.log( vampireName );
