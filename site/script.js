// Lista de curiosidades sobre Inteligência Artificial
const curiosidades = [
  "O termo 'Inteligência Artificial' foi usado pela primeira vez em 1956, na Conferência de Dartmouth.",
  "O AlphaGo, uma IA do Google, venceu o campeão mundial do jogo de tabuleiro Go em 2016 — um feito considerado quase impossível para máquinas.",
  "Muitos corretores ortográficos e preditores de texto do celular usam modelos de IA treinados com bilhões de palavras.",
  "A IA generativa (como a que cria textos e imagens) aprende padrões a partir de grandes quantidades de dados, sem 'copiar' diretamente o que viu.",
  "Redes neurais artificiais foram inspiradas no funcionamento dos neurônios do cérebro humano.",
  "Hoje existem IAs capazes de detectar certos tipos de câncer em exames de imagem com precisão comparável à de médicos especialistas."
];

// Seleciona os elementos do HTML
const botao = document.getElementById("curiosityBtn");
const textoCuriosidade = document.getElementById("curiosityText");

// Evento de clique: escolhe uma curiosidade aleatória e mostra na tela
botao.addEventListener("click", function () {
  const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
  textoCuriosidade.textContent = " " + curiosidades[indiceAleatorio];
  textoCuriosidade.classList.add("visible");
});