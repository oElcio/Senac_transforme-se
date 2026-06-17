const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número de 1 a 75: ", function(resposta) {
  let numero = Number(resposta);

  if (numero < 1 || numero > 75) {
    console.log("Número inválido.");
  } else if (numero >= 1 && numero <= 25) {
    console.log("Faixa B");
  } else if (numero >= 26 && numero <= 50) {
    console.log("Faixa I");
  } else {
    console.log("Faixa N");
  }

  rl.close();
});