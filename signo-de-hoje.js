/*

# Programa da DevMedia

O programa calcula o signo do dia

Conceitos abordados:

Arrow-functions e manipulacao de datas ( Date )
*/


// colecao de objetos para uso do APP
let colecao_signos = [
  { "Nome": "Aquário", "DataInicio": "01-20", "DataFim": "02-18" },
  { "Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20" },
  { "Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19" },
  { "Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20" },
  { "Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21" },
  { "Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23" },
  { "Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22" },
  { "Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22" },
  { "Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22" },
  { "Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21" },
  { "Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21" },
  { "Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19" }
];


const retorna_signos = (signo) => {
  //acessa o elemento da colecao via indice/posicao e chave do objeto
  let mensagem = "\nSigno de hoje: " + signo[0]["Nome"] + "\n"
  return mensagem;
}

//atribuindo a funcao a uma constante
const nome_signo = retorna_signos(colecao_signos);

//escreve o valor na saida padrao
console.log(nome_signo);