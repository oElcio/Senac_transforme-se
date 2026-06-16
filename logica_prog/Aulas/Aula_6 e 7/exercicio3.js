//Criar um programa que recebe uma opção do usuário — 1 para sortear ou 2 para sair — e exibe uma mensagem diferente para cada opção, tratando também qualquer outra entrada como inválida.
// Preciso que realize essa atividade utilizando apenas o conhecimento passado em sala, tantos as aulas 1,2,3 e 4 usandos anteriormente e essa novas enviadas 5,6 e 7.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite 1 para sortear ou 2 para sair: ", function(resposta) {
  let opcao = Number(resposta);

  if (opcao === 1) {
    console.log("Sorteando um número...");
  } else if (opcao === 2) {
    console.log("Saindo do programa...");
  } else {
    console.log("Opção inválida.");
  }

  rl.close();
});


//asçldmaslKDnaKSdasl,po