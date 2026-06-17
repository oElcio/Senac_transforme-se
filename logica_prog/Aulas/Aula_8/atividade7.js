const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a hora atual (0 a 23): ", function(resposta) {
  let hora = Number(resposta);

  if (hora < 0 || hora > 23) {
    console.log("Hora inválida.");
  } else if (hora >= 0 && hora <= 5) {
    console.log("Madrugada");
  } else if (hora >= 6 && hora <= 11) {
    console.log("Manhã");
  } else if (hora >= 12 && hora <= 17) {
    console.log("Tarde");
  } else {
    console.log("Noite");
  }

  rl.close();
});