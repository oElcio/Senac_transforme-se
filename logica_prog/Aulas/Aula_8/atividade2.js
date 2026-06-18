const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor da compra: ", function(resposta) {
  let valorCompra = Number(resposta);
  let desconto = 0;
  let valorFinal = 0;




  if (valorCompra < 0) {
    console.log("Valor inválido.");







  } else if (valorCompra <= 50) {
    desconto = 0;
    valorFinal = valorCompra - desconto;
    console.log("Valor original: R$ " + valorCompra);
    console.log("Valor com desconto: R$ " + valorFinal);







  } else if (valorCompra >= 51 && valorCompra <= 100) {
    desconto = valorCompra * 0.10;
    valorFinal = valorCompra - desconto;
    console.log("Valor original: R$ " + valorCompra);
    console.log("Valor com desconto: R$ " + valorFinal);
  } else if (valorCompra >= 101 && valorCompra <= 200) {
    desconto = valorCompra * 0.20;
    valorFinal = valorCompra - desconto;
    console.log("Valor original: R$ " + valorCompra);
    console.log("Valor com desconto: R$ " + valorFinal);
  } else {
    desconto = valorCompra * 0.30;
    valorFinal = valorCompra - desconto;
    console.log("Valor original: R$ " + valorCompra);
    console.log("Valor com desconto: R$ " + valorFinal);
  }

  rl.close();
});
``