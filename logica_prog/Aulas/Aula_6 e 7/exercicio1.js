// Criar um programa que recebe uma nota de 0 a 10 e classifica: 9 a 10 → Excelente 7 a 8 → Bom 5 a 6 → Regular abaixo de 5 → Insuficiente

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma nota de 0 a 10: ", function(resposta) {
  let nota = Number(resposta);

  if (nota < 0 || nota > 10) {
    console.log("Nota inválida.");
  } else if (nota >= 9 && nota <= 10) {
    console.log("Excelente");
  } else if (nota >= 7 && nota <= 8) {
    console.log("Bom");
  } else if (nota >= 5 && nota <= 6) {
    console.log("Regular");
  } else {
    console.log("Insuficiente");
  }

  rl.close();
});




