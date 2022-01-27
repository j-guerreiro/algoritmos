/* 

# Autor da solucao: Joel Guerreiro

Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

*/

function fizzBuzz() {
    let cont = 1;
    for ( let i = 1 ; i <= 100 ; i++ ) {
        if ( cont % 5 === 0 && cont % 3 === 0 ) {
            console.log("FizzBuzz!\n");
        } else if ( cont % 3 === 0 ) {
            console.log("Fizz!\n");
        } else if ( cont % 5 === 0 ) {
            console.log("Buzz!\n");
        } else {
            console.log(cont + "\n");
        }
        cont++;
    }
}
console.log(fizzBuzz());