//Desafio: Crie um programa que pergunta duas notas ao usuário, calcula e mostra a média ao usuario.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Fale seu nome: ", function(nomeUsuario) {
  console.log("Olá, aluno " + nomeUsuario + " tudo bem?!.");

    rl.question("Digite a primeira nota: ", function(nota1) {
      rl.question("Digite a segunda nota: ", function(nota2) {
        let Nota1 = Number(nota1);
        let Nota2 = Number(nota2);

        let Media = (Nota1 + Nota2) / 2;

        console.log("A média do aluno é: " + Media);

        if (Media >= 7) {
          console.log("O aluno está aprovado!");
        } else {
            console.log("reprovado")
        }
        rl.close();
      });
  });
});