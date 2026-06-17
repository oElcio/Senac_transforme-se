const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso: ", function(respostaPeso) {
  let peso = Number(respostaPeso);

  rl.question("Digite sua altura: ", function(respostaAltura) {
    let altura = Number(respostaAltura);

    if (peso <= 0 || altura <= 0) {
      console.log("Peso ou altura inválidos.");
    } else {
      let imc = peso / (altura * altura);

      console.log("Seu IMC é: " + imc);

      if (imc < 18.5) {
        console.log("Abaixo do peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
      } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
      } else {
        console.log("Obesidade");
      }
    }

    rl.close();
  });
});
``