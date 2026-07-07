// ================================================================
// BINGO - Sistema de Sorteio
// UC2 - Lógica de Programação - Senac
// ================================================================
//
// VERSÃO PARA NODE.JS (terminal do VS Code)
// Esta versão usa readline para ler entradas do usuário,
// pois o prompt() do navegador não funciona no Node.js.
//
// COMO RODAR:
//   No terminal do VS Code: node bingo_node.js
//
// CONCEITOS USADOS:
//  Aula 1  → algoritmo descrito nos comentários
//  Aula 2  → variáveis (let), constantes (const), console.log
//  Aula 3  → tipos de dados: number, string, boolean
//  Aula 4  → entrada/saída de dados
//  Aula 5  → if (condicional simples)
//  Aula 6/7→ if / else if / else (condicional composta)
//  Aula 8  → validação e cobertura de cenários
//  Aula 9  → funções, return, Math.random, Math.floor
//  Aula 10/11→ while, for
//  Aula 12/13→ arrays (push, splice, sort, length, for...of)
//              contadores, acumuladores, break, continue
//  Aula 14/15→ objetos ({ chave: valor }), for...in
// ================================================================

// readline é a forma do Node.js ler entradas do terminal
// (substitui o prompt() do navegador)
const readline = require("readline");

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});

// Função auxiliar que substitui o prompt() do navegador
// Recebe uma pergunta e uma função que recebe a resposta
function prompt(pergunta, callback) {
  rl.question(pergunta, callback);
}


// ----------------------------------------------------------------
// AULA 2 — Variáveis e constantes
// ----------------------------------------------------------------
const TOTAL_NUMEROS = 75;   // sempre 75 bolas no bingo — nunca muda

let numerosDisponiveis = []; // números ainda não sorteados
let numerosSorteados   = []; // números já sorteados
let jogoAtivo          = true;


// ================================================================
// FUNÇÕES DO SISTEMA (Aula 9)
// ================================================================


// ----------------------------------------------------------------
// FUNÇÃO 1 — iniciarSistema()
// Preenche a lista de 1 a 75 e reinicia tudo
// Conceitos: for, push (Aulas 10/11, 12/13)
// ----------------------------------------------------------------
function iniciarSistema() {

  numerosDisponiveis = []; // zerado
  numerosSorteados   = []; // zerado
  jogoAtivo          = true;

  // FOR: sabemos exatamente que são 75 números (Aula 10/11)
  for (let i = 1; i <= TOTAL_NUMEROS; i = i + 1) {
    numerosDisponiveis.push(i); // adiciona no final do array
  }

  console.log("\n====================================");
  console.log("          BINGO INICIADO!");
  console.log("  " + numerosDisponiveis.length + " números disponíveis (1 a 75).");
  console.log("====================================\n");
}


// ----------------------------------------------------------------
// FUNÇÃO 2 — sortearNumero()
// Sorteia UM número da lista de disponíveis e o move para sorteados
// Conceitos: if, Math.random, Math.floor, splice, push, return (Aulas 5, 9, 12/13)
//
// IMPLEMENTA OS PASSOS:
//   2 — Sortear um número ainda não sorteado
//   3 — Anunciar o número sorteado
//   4 — Marcar o número como já sorteado
// ----------------------------------------------------------------
function sortearNumero() {

  // CONDIÇÃO DE PARADA (Aula 9) — Passo 7 da lógica
  if (numerosDisponiveis.length === 0) {
    console.log("\nTodos os 75 números já foram sorteados! O bingo encerrou.\n");
    jogoAtivo = false;
    return null;
  }

  // PASSO 2: sortear um número aleatório da lista de disponíveis
  //
  // Math.random() → número entre 0.0 e 0.999...
  // × comprimento da lista → posição aleatória dentro da lista
  // Math.floor()  → arredonda para baixo (inteiro)
  let indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
  let numeroSorteado  = numerosDisponiveis[indiceAleatorio];

  // PASSO 3: anunciar
  console.log("\n>>> Número sorteado: " + numeroSorteado);
  console.log("    Ainda disponíveis: " + (numerosDisponiveis.length - 1) + "\n");

  // PASSO 4: marcar como sorteado
  // splice(índice, 1) remove 1 item da lista de disponíveis
  numerosDisponiveis.splice(indiceAleatorio, 1);
  // push() adiciona ao histórico de sorteados
  numerosSorteados.push(numeroSorteado);

  return numeroSorteado; // return — devolve o valor para quem chamou (Aula 9)
}


// ----------------------------------------------------------------
// FUNÇÃO 3 — mostrarHistorico()
// Exibe todos os sorteados na ordem em que saíram
// Conceitos: if/else, for com índice (Aulas 6/7, 10/11)
// ----------------------------------------------------------------
function mostrarHistorico() {

  if (numerosSorteados.length === 0) {
    console.log("\nNenhum número foi sorteado ainda.\n");
    return;
  }

  console.log("\n====================================");
  console.log("       HISTÓRICO DE SORTEIOS");
  console.log("====================================");

  // FOR com índice — acessa cada posição do array (Aula 10/11)
  for (let i = 0; i < numerosSorteados.length; i = i + 1) {
    console.log("  " + (i + 1) + "º  →  " + numerosSorteados[i]);
  }

  console.log("  Total: " + numerosSorteados.length + " número(s).\n");
}


// ----------------------------------------------------------------
// FUNÇÃO 4 — mostrarOrdenados()
// Exibe os sorteados em ordem crescente
// Conceitos: sort(function), for...of (Aula 12/13)
// ----------------------------------------------------------------
function mostrarOrdenados() {

  if (numerosSorteados.length === 0) {
    console.log("\nNenhum número foi sorteado ainda.\n");
    return;
  }

  // [...array] cria uma CÓPIA para não bagunçar o histórico original
  let copia = [...numerosSorteados];

  // sort com função comparadora ordena números corretamente (Aula 12/13)
  copia.sort(function(a, b) {
    return a - b; // crescente: menor primeiro
  });

  console.log("\n====================================");
  console.log("     NÚMEROS EM ORDEM CRESCENTE");
  console.log("====================================");

  let linha = "  ";
  // for...of percorre os valores diretamente (Aula 12/13)
  for (let numero of copia) {
    linha = linha + numero + "  ";
  }
  console.log(linha);
  console.log("\n  Total: " + copia.length + " número(s).\n");
}


// ----------------------------------------------------------------
// FUNÇÃO 5 — pesquisarNumero(numeroBuscado)
// Verifica se um número já foi sorteado
// Conceitos: parâmetro, Number(), for, continue, break (Aulas 9, 12/13)
// ----------------------------------------------------------------
function pesquisarNumero(numeroBuscado) {

  // Number() converte a string digitada para número (Aula 9, Aula 3)
  numeroBuscado = Number(numeroBuscado);

  // Validação: número precisa estar entre 1 e 75 (Aula 6/7)
  if (isNaN(numeroBuscado) || numeroBuscado < 1 || numeroBuscado > TOTAL_NUMEROS) {
    console.log("\nNúmero inválido! Digite entre 1 e 75.\n");
    return;
  }

  let encontrado = false; // contador booleano (Aula 12/13)
  let posicao    = -1;

  // Percorremos o histórico procurando o número (Aula 10/11)
  for (let i = 0; i < numerosSorteados.length; i = i + 1) {

    // CONTINUE: não é o número procurado — pula esta iteração (Aula 12/13)
    if (numerosSorteados[i] !== numeroBuscado) {
      continue;
    }

    // Achamos!
    encontrado = true;
    posicao    = i + 1;

    // BREAK: não precisa continuar procurando (Aula 12/13)
    break;
  }

  // Exibimos o resultado (Aula 6/7)
  if (encontrado) {
    console.log("\nO número " + numeroBuscado + " JÁ foi sorteado (saiu em " + posicao + "º lugar).\n");
  } else {
    console.log("\nO número " + numeroBuscado + " ainda NÃO foi sorteado.\n");
  }
}


// ----------------------------------------------------------------
// FUNÇÃO 6 — mostrarRegistroSistema()
// Exibe um objeto com o estado atual do jogo
// Conceitos: objetos, for...in (Aula 14/15)
// ----------------------------------------------------------------
function mostrarRegistroSistema() {

  // OBJETO: agrupa informações diferentes sobre uma mesma coisa (Aula 14/15)
  let registro = {
    totalDisponiveis : numerosDisponiveis.length,
    totalSorteados   : numerosSorteados.length,
    jogoEncerrado    : !jogoAtivo,
    ultimoNumero     : numerosSorteados.length > 0
                        ? numerosSorteados[numerosSorteados.length - 1]
                        : "nenhum ainda"
  };

  console.log("\n====================================");
  console.log("        REGISTRO DO SISTEMA");
  console.log("====================================");

  // for...in percorre as CHAVES do objeto (Aula 14/15)
  for (let chave in registro) {
    console.log("  " + chave + ": " + registro[chave]);
  }

  console.log("====================================\n");
}


// ----------------------------------------------------------------
// FUNÇÃO 7 — processarEscolha(opcao, callback)
// Decide o que fazer com a opção digitada
// Conceitos: if / else if / else, parâmetros (Aulas 6/7, 9)
// ----------------------------------------------------------------
function processarEscolha(opcao, callback) {

  let escolha = Number(opcao); // converte para número (Aula 3)

  if (escolha === 1) {

    // PASSOS 2, 3, 4 da lógica: sortear, anunciar, marcar
    sortearNumero();

    // PASSO 5: verificar se ainda há disponíveis (Aula 5)
    if (numerosDisponiveis.length === 0) {
      jogoAtivo = false;
      console.log("Todos os números foram sorteados. O bingo acabou!\n");
    }

    callback(); // volta para o menu

  } else if (escolha === 2) {
    mostrarHistorico();
    callback();

  } else if (escolha === 3) {
    mostrarOrdenados();
    callback();

  } else if (escolha === 4) {
    // Pedimos o número a pesquisar (Aula 4 — entrada de dados)
    prompt("Digite o número que quer pesquisar (1 a 75): ", function(resposta) {
      pesquisarNumero(resposta);
      callback();
    });

  } else if (escolha === 5) {
    mostrarRegistroSistema();
    callback();

  } else if (escolha === 6) {
    iniciarSistema();
    console.log("Jogo reiniciado!\n");
    callback();

  } else if (escolha === 7) {
    // Encerrar
    jogoAtivo = false;
    encerrarJogo();

  } else {
    // ELSE: cobre qualquer coisa não prevista (Aula 6/7)
    console.log("\nOpção inválida! Digite um número de 1 a 7.\n");
    callback();
  }
}


// ----------------------------------------------------------------
// FUNÇÃO 8 — encerrarJogo()
// Exibe o relatório final e fecha o programa
// Conceitos: acumulador, for...of (Aula 12/13)
// ----------------------------------------------------------------
function encerrarJogo() {

  if (numerosSorteados.length > 0) {
    console.log("\n=====================================");
    console.log("          RELATÓRIO FINAL");
    console.log("=====================================");

    mostrarHistorico();
    mostrarOrdenados();
    mostrarRegistroSistema();

    // ACUMULADOR: somamos todos os números sorteados (Aula 12/13)
    let somaTotal = 0;
    for (let num of numerosSorteados) {
      somaTotal = somaTotal + num; // acumula a soma
    }

    let media = somaTotal / numerosSorteados.length;

    console.log("Soma de todos os sorteados: " + somaTotal);
    console.log("Média dos sorteados:        " + media.toFixed(2) + "\n");
  }

  console.log("Até logo!\n");
  rl.close(); // fecha o leitor de entradas
  process.exit(0); // encerra o Node.js
}


// ----------------------------------------------------------------
// FUNÇÃO 9 — rodarMenu()
// Controla o fluxo principal — substitui o WHILE com recursão
// para funcionar com o sistema assíncrono do readline
//
// IMPLEMENTA A LÓGICA COMPLETA:
//   Passo 1 → iniciarSistema()
//   Passo 5 → verifica disponíveis antes de mostrar o menu
//   Passo 6 → rodarMenu() chama a si mesma (repete)
//   Passo 7 → jogoAtivo = false para encerrar
// ----------------------------------------------------------------
function rodarMenu() {

  // PASSO 5 — verificar se o jogo ainda está ativo (Aula 5)
  if (!jogoAtivo) {
    encerrarJogo();
    return;
  }

  // Exibe as opções
  console.log("------------------------------------");
  console.log("           MENU DO BINGO");
  console.log("------------------------------------");
  console.log("  1 - Sortear um número");
  console.log("  2 - Ver histórico de sorteios");
  console.log("  3 - Ver números em ordem crescente");
  console.log("  4 - Pesquisar um número");
  console.log("  5 - Ver registro do sistema");
  console.log("  6 - Reiniciar o jogo");
  console.log("  7 - Sair");
  console.log("------------------------------------");

  // Lê a opção do usuário (substituto do prompt() — Aula 4)
  prompt("Digite sua opção: ", function(opcao) {
    // Após ler, processa a escolha
    // Quando terminar, chama rodarMenu() novamente → PASSO 6
    processarEscolha(opcao, rodarMenu);
  });
}


// ================================================================
// INÍCIO DO PROGRAMA (Aula 1)
// ================================================================
// PASSO 1: preparar todos os 75 números
iniciarSistema();

// PASSOS 2 a 7: laço principal via menu interativo
rodarMenu();