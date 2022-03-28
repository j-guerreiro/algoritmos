/* 

# Autor da solucao: Joel Guerreiro

Algoritmo básico de ordenação de vetor.

*/
const ordenaVetor = (vetor) => {
  let aux = 0;
  let aux2 = 0;
  for (let i = 0; i < vetor.length; i++) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] > vetor[i + 1]) {
        aux = vetor[i + 1];
        aux2 = vetor[i];
        vetor[i] = aux;
        vetor[i + 1] = aux2;
      }
    }
  }
  console.log(vetor.join(", "));
}
let v = [10, 100, 8, 2, 5, 10, 1, 12, 50, 3];
ordenaVetor(v);