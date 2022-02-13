function tabuada ( value ){
  
  let counter = 0;
  let aux = 0;
  let result;
  
  while ( counter <= 10 ) {
    
    aux = counter;
    result = aux * value;
    console.log( "Value: " + value + " x " + counter + " = " + result );
    counter++;
  }
}

let number = 2;
console.log( tabuada( number ) );


