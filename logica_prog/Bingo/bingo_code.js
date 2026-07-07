const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- dados do jogo ---
const TOTAL = 75;
let disponiveis = [];
let sorteados   = [];
let ativo       = true;

// --- funções ---
function iniciar() {
  disponiveis = [];
  sorteados   = [];
  ativo       = true;
  for (let i = 1; i <= TOTAL; i++) disponiveis.push(i);
  console.log("\nBINGO INICIADO! " + disponiveis.length + " números disponíveis.\n");
}

function sortear() {
  if (disponiveis.length === 0) {
    console.log("Todos os números já foram sorteados!\n");
    ativo = false;
    return;
  }
  let idx    = Math.floor(Math.random() * disponiveis.length);
  let numero = disponiveis[idx];
  disponiveis.splice(idx, 1);
  sorteados.push(numero);
  console.log(">>> Sorteado: " + numero + "  |  Restam: " + disponiveis.length + "\n");
}

function historico() {
  if (sorteados.length === 0) { console.log("Nenhum número sorteado ainda.\n"); return; }
  console.log("--- Histórico ---");
  for (let i = 0; i < sorteados.length; i++) console.log("  " + (i+1) + "º → " + sorteados[i]);
  console.log("Total: " + sorteados.length + "\n");
}

function ordenados() {
  if (sorteados.length === 0) { console.log("Nenhum número sorteado ainda.\n"); return; }
  let copia = [...sorteados].sort(function(a, b) { return a - b; });
  console.log("--- Ordenados ---\n  " + copia.join("  ") + "\n");
}

function pesquisar(n) {
  n = Number(n);
  if (isNaN(n) || n < 1 || n > TOTAL) { console.log("Número inválido!\n"); return; }
  let encontrado = false;
  for (let i = 0; i < sorteados.length; i++) {
    if (sorteados[i] !== n) continue;
    encontrado = true;
    break;
  }
  console.log(encontrado ? n + " JÁ foi sorteado.\n" : n + " ainda NÃO foi sorteado.\n");
}

function registro() {
  let obj = { disponiveis: disponiveis.length, sorteados: sorteados.length,
              ultimo: sorteados.length > 0 ? sorteados[sorteados.length - 1] : "nenhum" };
  console.log("--- Registro ---");
  for (let chave in obj) console.log("  " + chave + ": " + obj[chave]);
  console.log();
}

function encerrar() {
  if (sorteados.length > 0) {
    historico();
    ordenados();
    registro();
    let soma = 0;
    for (let n of sorteados) soma += n;
    console.log("Soma: " + soma + "  |  Média: " + (soma / sorteados.length).toFixed(2));
  }
  console.log("\nAté logo!\n");
  rl.close();
  process.exit(0);
}

function processar(op, cb) {
  let n = Number(op);
  if      (n === 1) { sortear();   if (!ativo) encerrar(); else cb(); }
  else if (n === 2) { historico(); cb(); }
  else if (n === 3) { ordenados(); cb(); }
  else if (n === 4) { rl.question("Pesquisar número: ", function(r) { pesquisar(r); cb(); }); }
  else if (n === 5) { registro();  cb(); }
  else if (n === 6) { iniciar();   cb(); }
  else if (n === 7) { encerrar(); }
  else              { console.log("Opção inválida!\n"); cb(); }
}

function menu() {
  if (!ativo) { encerrar(); return; }
  console.log("1-Sortear  2-Histórico  3-Ordenados  4-Pesquisar  5-Registro  6-Reiniciar  7-Sair");
  rl.question("Opção: ", function(resposta) {
    let opcao = Number(resposta);
    processar(opcao, menu);
  });
}

// --- início ---
iniciar();
menu();