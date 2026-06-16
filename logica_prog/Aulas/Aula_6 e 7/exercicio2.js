// Criar um programa que recebe um número e exibe se é par ou ímpar.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(resposta) {
  let numero = Number(resposta);

  if (numero > 0 || numero < 0 || numero === 0) {
    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }
  } else {
    console.log("Valor inválido.");
  }

  rl.close();
});
