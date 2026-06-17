const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a temperatura em graus Celsius: ", function(resposta) {
  let temperatura = Number(resposta);

  if (temperatura < 10) {
    console.log("Frio");
  } else if (temperatura >= 10 && temperatura <= 20) {
    console.log("Ameno");
  } else if (temperatura >= 21 && temperatura <= 30) {
    console.log("Quente");
  } else {
    console.log("Muito quente");
  }

  rl.close();
});