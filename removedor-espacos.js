/*
 * Autor: Joel Guerreiro
 *
 * Arrow function que recebe um valor com parametro e remove espacos desnecessarios
 *
 * */


const remove_espacos = ( textParam ) => {
  return textParam.trim();
}

let msg = "               The Lord of The Rings                            ";

let fcall = remove_espacos( msg );

console.log( fcall );
