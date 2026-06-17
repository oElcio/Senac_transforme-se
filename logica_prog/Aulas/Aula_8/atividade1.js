const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite sua idade: ", function(resposta) {
  let idade = Number(resposta);

  if (idade < 0 || idade > 120) {
    console.log("Idade inválida.");
  } else if (idade < 12) {
    console.log("Criança");
  } else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
  } else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }

  rl.close();
});