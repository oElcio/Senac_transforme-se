// ================================================================
// BINGO - Sistema de Sorteio
// UC2 - Lógica de Programação - Senac
// ================================================================
// Rode no terminal do VS Code com: node bingo_final.js
// ================================================================


// ----------------------------------------------------------------
// ENTRADA E SAÍDA DE DADOS (Aula 4)
// ----------------------------------------------------------------

// "require" carrega o módulo nativo "readline" do Node.js,
// que permite ler o que o usuário digita no terminal. (Aula 4)
const readline = require("readline");

// Criamos a interface ligando o teclado (stdin) à tela (stdout). (Aula 4)
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// console.log() → saída de dados: exibe mensagens na tela. (Aula 4)
// rl.question() → entrada de dados: exibe uma pergunta e lê o que o usuário digitar. (Aula 4)


// ----------------------------------------------------------------
// VARIÁVEIS E CONSTANTES GLOBAIS (Aula 2)
// ----------------------------------------------------------------

// "const" guarda um valor que nunca vai mudar. (Aula 2)
const TOTAL = 75;

// "let" cria variáveis que podem mudar ao longo do programa. (Aula 2)
let disponiveis = []; // array com os números ainda não sorteados. (Aula 12/13)
let sorteados   = []; // array com os números já sorteados. (Aula 12/13)
let ativo       = true; // boolean que controla se o jogo está em andamento. (Aula 3)


// ================================================================
// FUNÇÕES DO SISTEMA (Aula 9)
// ================================================================


// ----------------------------------------------------------------
// FUNÇÃO iniciar()
// Prepara o jogo do zero, preenchendo a lista de 1 a 75.
// ----------------------------------------------------------------
function iniciar() {

  disponiveis = []; // zera o array de disponíveis. (Aula 12/13)
  sorteados   = []; // zera o array de sorteados. (Aula 12/13)
  ativo       = true; // reativa o jogo. (Aula 3)

  // FOR: sabemos exatamente quantas vezes repetir — 75. (Aula 10/11)
  // i++ é uma forma curta de i = i + 1.
  for (let i = 1; i <= TOTAL; i++) disponiveis.push(i); // push() adiciona i no final do array. (Aula 12/13)

  console.log("\nBINGO INICIADO! " + disponiveis.length + " números disponíveis.\n"); // saída de dados. (Aula 4)
}


// ----------------------------------------------------------------
// FUNÇÃO sortear()
// Sorteia um número disponível e o move para o histórico.
// Implementa os Passos 2, 3 e 4 da lógica pedida.
// ----------------------------------------------------------------
function sortear() {

  // CONDIÇÃO DE PARADA: array vazio significa que todos os números saíram. (Aula 9)
  if (disponiveis.length === 0) {
    console.log("Todos os números já foram sorteados!\n"); // saída de dados. (Aula 4)
    ativo = false; // desativa o jogo. (Aula 3)
    return; // encerra a função aqui. (Aula 9)
  }

  // PASSO 2: gerar índice aleatório para escolher um número da lista.
  // Math.random() gera decimal entre 0.0 e 0.999... (Aula 9 — funções nativas)
  // Math.floor() arredonda para baixo, garantindo número inteiro. (Aula 9)
  let idx    = Math.floor(Math.random() * disponiveis.length);
  let numero = disponiveis[idx]; // pega o número naquela posição do array. (Aula 12/13)

  disponiveis.splice(idx, 1); // PASSO 4: remove da lista de disponíveis. (Aula 12/13)
  sorteados.push(numero);     // PASSO 4: adiciona ao histórico de sorteados. (Aula 12/13)

  console.log(">>> Sorteado: " + numero + "  |  Restam: " + disponiveis.length + "\n"); // PASSO 3: anuncia. (Aula 4)
}


// ----------------------------------------------------------------
// FUNÇÃO historico()
// Exibe todos os sorteados na ordem em que saíram.
// ----------------------------------------------------------------
function historico() {

  // if simples: se o array estiver vazio, avisa e encerra a função. (Aula 5)
  if (sorteados.length === 0) { console.log("Nenhum número sorteado ainda.\n"); return; }

  console.log("--- Histórico ---"); // saída de dados. (Aula 4)

  // FOR com índice percorre cada posição do array. (Aula 10/11)
  for (let i = 0; i < sorteados.length; i++) console.log("  " + (i + 1) + "º → " + sorteados[i]);
  //                                                              ↑ i+1 para exibir posição a partir de 1

  console.log("Total: " + sorteados.length + "\n"); // saída de dados. (Aula 4)
}


// ----------------------------------------------------------------
// FUNÇÃO ordenados()
// Exibe os sorteados em ordem crescente.
// ----------------------------------------------------------------
function ordenados() {

  if (sorteados.length === 0) { console.log("Nenhum número sorteado ainda.\n"); return; } // (Aula 5)

  // [...sorteados] cria uma cópia do array para não bagunçar o histórico original.
  // .sort(function(a,b){ return a-b }) ordena os números de forma crescente. (Aula 12/13)
  let copia = [...sorteados].sort(function(a, b) { return a - b; });

  // .join("  ") transforma o array em uma string com itens separados por espaço. (Aula 12/13)
  console.log("--- Ordenados ---\n  " + copia.join("  ") + "\n"); // saída de dados. (Aula 4)
}


// ----------------------------------------------------------------
// FUNÇÃO pesquisar(entrada)
// Verifica se um número específico já foi sorteado.
// ----------------------------------------------------------------
function pesquisar(entrada) {

  // Number() converte a string digitada para número. (Aula 9 — funções nativas)
  let n = Number(entrada);

  // Validação: isNaN verifica se não é número; || = "ou"; checamos o intervalo. (Aula 6/7)
  if (isNaN(n) || n < 1 || n > TOTAL) { console.log("Número inválido!\n"); return; }

  let encontrado = false; // variável de controle — começa falsa. (Aula 3)

  // FOR percorre o histórico procurando o número. (Aula 10/11)
  for (let i = 0; i < sorteados.length; i++) {
    if (sorteados[i] !== n) continue; // CONTINUE: não é o que procuramos, pula. (Aula 12/13)
    encontrado = true;
    break; // BREAK: achou — para o laço imediatamente. (Aula 12/13)
  }

  // Operador ternário — forma curta de if/else em uma linha. (Aula 5/6)
  console.log(encontrado ? n + " JÁ foi sorteado.\n" : n + " ainda NÃO foi sorteado.\n"); // saída de dados. (Aula 4)
}


// ----------------------------------------------------------------
// FUNÇÃO registro()
// Exibe um objeto com o estado atual do jogo.
// ----------------------------------------------------------------
function registro() {

  // OBJETO: agrupa informações diferentes sobre uma mesma coisa. (Aula 14/15)
  let obj = {
    disponiveis: disponiveis.length, // quantos números ainda restam
    sorteados  : sorteados.length,   // quantos já saíram
    ultimo     : sorteados.length > 0 ? sorteados[sorteados.length - 1] : "nenhum" // último sorteado. (Aula 14/15)
  };

  console.log("--- Registro ---"); // saída de dados. (Aula 4)

  // FOR...IN percorre as chaves do objeto (disponiveis, sorteados, ultimo). (Aula 14/15)
  for (let chave in obj) console.log("  " + chave + ": " + obj[chave]); // saída de dados. (Aula 4)

  console.log();
}


// ----------------------------------------------------------------
// FUNÇÃO encerrar()
// Exibe o relatório final e fecha o programa.
// ----------------------------------------------------------------
function encerrar() {

  if (sorteados.length > 0) { // só exibe relatório se algo foi sorteado. (Aula 5)
    historico(); // chama função de histórico. (Aula 9)
    ordenados(); // chama função de ordenados. (Aula 9)
    registro();  // chama função de registro. (Aula 9)

    let soma = 0;
    for (let n of sorteados) soma += n; // FOR...OF acumula a soma. (Aula 12/13)

    // .toFixed(2) formata com 2 casas decimais. (Aula 9 — funções nativas)
    console.log("Soma: " + soma + "  |  Média: " + (soma / sorteados.length).toFixed(2)); // saída de dados. (Aula 4)
  }

  console.log("\nAté logo!\n"); // saída de dados. (Aula 4)
  rl.close();      // encerra o leitor de entradas.
  process.exit(0); // encerra o Node.js.
}


// ----------------------------------------------------------------
// FUNÇÃO processar(op)
// Decide o que fazer com a opção digitada.
// Depois chama menu() de volta para continuar o loop. (Aula 6/7, 9)
// ----------------------------------------------------------------
function processar(op) {

  // Number() converte a string digitada para número. (Aula 3)
  let n = Number(op);

  // IF / ELSE IF / ELSE: cada opção executa uma ação diferente. (Aula 6/7)
  if      (n === 1) { sortear();   menu(); }  // PASSOS 2, 3 e 4: sorteia, anuncia e marca
  else if (n === 2) { historico(); menu(); }  // exibe histórico e volta ao menu
  else if (n === 3) { ordenados(); menu(); }  // exibe ordenados e volta ao menu
  else if (n === 4) {
    // rl.question() → entrada de dados: lê o número a pesquisar. (Aula 4)
    rl.question("Pesquisar número (1 a 75): ", function(entrada) {
      pesquisar(entrada); // passa a entrada para a função pesquisar. (Aula 9)
      menu(); // volta ao menu.
    });
  }
  else if (n === 5) { registro();  menu(); }  // exibe registro e volta ao menu
  else if (n === 6) { iniciar();   menu(); }  // reinicia o jogo e volta ao menu
  else if (n === 7) { encerrar(); }           // PASSO 7: encerra o programa
  else { console.log("Opção inválida!\n"); menu(); } // ELSE: valor não previsto. (Aula 6/7)
}


// ----------------------------------------------------------------
// FUNÇÃO menu()
// Exibe as opções e lê a escolha do usuário.
// Ao terminar cada ação, chama a si mesma — isso substitui o WHILE.
// Implementa os Passos 5, 6 e 7 da lógica pedida.
// ----------------------------------------------------------------
function menu() {

  // PASSO 5 e 7: se o jogo acabou, encerra em vez de mostrar o menu. (Aula 5)
  if (!ativo) { encerrar(); return; }

  console.log("1-Sortear  2-Histórico  3-Ordenados  4-Pesquisar  5-Registro  6-Reiniciar  7-Sair"); // saída de dados. (Aula 4)

  // rl.question() → entrada de dados: lê a opção digitada pelo usuário. (Aula 4)
  // Quando o usuário digitar, chama processar() com o valor lido.
  rl.question("Opção: ", function(op) {
    processar(op); // PASSO 6: processa e, ao fim, menu() é chamada de novo.
  });
}


// ================================================================
// INÍCIO DO PROGRAMA (Aula 1 — o algoritmo começa aqui)
// ================================================================

iniciar(); // PASSO 1: prepara os 75 números disponíveis.
menu();    // PASSOS 2 a 7: inicia o menu interativo.
