//Utilizando as variáveis criadas na aula passada, crie operações utilizando os operadores aritméticos, de atribuição e relacionais

const VALOR_DA_PASSAGEM = 4.50;

let nome_Do_Passageiro = "elcio";
let saldo_Do_Cartao = 12.00;

let saldoSuficiente = saldo_Do_Cartao >= VALOR_DA_PASSAGEM;

let saldoRestante = saldo_Do_Cartao - VALOR_DA_PASSAGEM;

saldo_Do_Cartao -= VALOR_DA_PASSAGEM;

console.log("Passageiro:",nome_Do_Passageiro);
console.log("Saldo restante:",saldo_Do_Cartao);