const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma cor: ", function(cor) {
  if (cor === "Verde" || cor === "verde" || cor === "VERDE") {
    console.log("Pode seguir");
  } else if (cor === "Amarelo" || cor === "amarelo" || cor === "AMARELO") {
    console.log("Atenção, reduza a velocidade");
  } else if (cor === "Vermelho" || cor === "vermelho" || cor === "VERMELHO") {
    console.log("Pare");
  } else {
    console.log("Cor inválida");
  }

  rl.close();
});