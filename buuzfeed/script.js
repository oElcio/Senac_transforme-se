(function(){

  const questions = [
    {
      text: "O que mais chama sua atenção em uma letra de rap?",
      options: [
        { text: "Histórias reais do cotidiano da comunidade", profile: "poeta" },
        { text: "Punchlines afiadas e postura confiante", profile: "guerreira" },
        { text: "Referências à ancestralidade e à resistência", profile: "ancestral" },
        { text: "Jogos de palavras e improviso na medida", profile: "freestyle" }
      ]
    },
    {
      text: "Como você costuma se posicionar numa discussão importante?",
      options: [
        { text: "Escuto com atenção antes de formar minha opinião", profile: "poeta" },
        { text: "Defendo meu ponto de vista com firmeza", profile: "guerreira" },
        { text: "Penso em como isso se conecta com histórias mais antigas", profile: "ancestral" },
        { text: "Uso humor pra desarmar a tensão", profile: "freestyle" }
      ]
    },
    {
      text: "Qual elemento da cultura hip-hop mais representa você?",
      options: [
        { text: "O grafite, contando histórias nas paredes da cidade", profile: "poeta" },
        { text: "O breaking, com atitude e presença de palco", profile: "guerreira" },
        { text: "O DJ, que resgata sons, raízes e memória", profile: "ancestral" },
        { text: "O freestyle, na improvisação pura do momento", profile: "freestyle" }
      ]
    },
    {
      text: "Numa roda de rima entre amigas, qual seria seu papel?",
      options: [
        { text: "A que traz a narrativa mais sentida", profile: "poeta" },
        { text: "A que topa qualquer desafio de verso", profile: "guerreira" },
        { text: "A que puxa referências de quem veio antes", profile: "ancestral" },
        { text: "A que surpreende todo mundo com criatividade", profile: "freestyle" }
      ]
    },
    {
      text: "O que mais te motiva a se expressar publicamente?",
      options: [
        { text: "Contar a verdade da minha vivência", profile: "poeta" },
        { text: "Provar do que sou capaz", profile: "guerreira" },
        { text: "Honrar quem abriu caminho antes de mim", profile: "ancestral" },
        { text: "Viver o momento sem medo de errar", profile: "freestyle" }
      ]
    },
    {
      text: "Escolha a cor que mais combina com sua energia:",
      options: [
        { text: "Terracota — raiz e chão", profile: "poeta" },
        { text: "Vermelho — força e intensidade", profile: "guerreira" },
        { text: "Dourado — herança e memória", profile: "ancestral" },
        { text: "Rosa neon — ousadia e movimento", profile: "freestyle" }
      ]
    },
    {
      text: "Como você reage quando algo não sai como planejado?",
      options: [
        { text: "Reflito e transformo em aprendizado", profile: "poeta" },
        { text: "Encaro de frente e sigo em frente", profile: "guerreira" },
        { text: "Busco força na minha trajetória até ali", profile: "ancestral" },
        { text: "Improviso uma saída criativa na hora", profile: "freestyle" }
      ]
    },
    {
      text: "Pra você, o que a cultura do rap representa acima de tudo?",
      options: [
        { text: "Um espaço de escuta e verdade", profile: "poeta" },
        { text: "Um território de disputa por respeito", profile: "guerreira" },
        { text: "Um elo entre gerações", profile: "ancestral" },
        { text: "Liberdade total de expressão", profile: "freestyle" }
      ]
    }
  ];

  const profiles = {
    poeta: {
      name: "A Poeta da Quebrada",
      title: "Você transforma o cotidiano em poesia de resistência.",
      desc: "Você presta atenção nos detalhes que passam despercebidos: a conversa na esquina, a rotina da família, o que fica sem ser dito. Sua força está em transformar o vivido em palavra — sem enfeites, mas com verdade.",
      values: "Essa forma de se expressar dialoga direto com um dos pilares do hip-hop: dar voz a quem normalmente não é ouvido, contando histórias reais em vez de repetir clichês.",
      message: "Mulheres que escrevem sobre o que vivem — e não sobre o que esperam delas — ajudaram a expandir o que o rap pode dizer. Contar a própria história, sem pedir licença, também é ocupar espaço.",
      recommendation: "Procure por saraus de poesia falada e batalhas de rima com curadoria feminina na sua cidade ou no YouTube — muitos coletivos brasileiros gravam e disponibilizam essas rodas gratuitamente."
    },
    guerreira: {
      name: "A Guerreira do Microfone",
      title: "Você entra em qualquer roda pronta pra disputar espaço.",
      desc: "Confiança é a sua marca registrada. Você não tem medo de se posicionar, de discordar ou de mostrar do que é capaz — e isso transparece na forma direta como você se comunica.",
      values: "Isso conecta com a raiz competitiva e afirmativa do rap, presente desde as batalhas de MC nas ruas: microfone é disputado, e cada verso é uma chance de provar valor.",
      message: "Historicamente, os espaços de batalha e disputa no rap foram majoritariamente ocupados por homens. Mulheres que decidiram entrar nessa disputa — e vencer nela — abriram caminho estrutural para que outras pudessem seguir.",
      recommendation: "Assista a batalhas de rima com presença feminina relevante disponíveis em plataformas de vídeo; observar a disputa ao vivo é uma boa forma de entender essa vertente da cultura."
    },
    ancestral: {
      name: "A Voz da Ancestralidade",
      title: "Você carrega memória em cada palavra que escolhe.",
      desc: "Você tem um olhar voltado para raízes: família, herança cultural, história. Antes de agir, costuma pensar em quem veio antes e no que essa trajetória ensina.",
      values: "O hip-hop nasceu profundamente conectado à cultura afrodiaspórica e a movimentos de resistência negra — sua forma de pensar dialoga diretamente com essa origem, tratando a música como continuidade histórica, não como moda passageira.",
      message: "Recuperar e transmitir memória cultural também é um ato político. Mulheres negras têm um papel central na preservação dessa ancestralidade dentro e fora do rap, sustentando a cultura para além das tendências do momento.",
      recommendation: "Pesquise sobre a história do hip-hop no Brasil e sua relação com movimentos negros e periféricos — documentários e podcasts brasileiros sobre o tema são um bom ponto de partida."
    },
    freestyle: {
      name: "A Revolucionária do Freestyle",
      title: "Você não segue roteiro — você cria um novo a cada verso.",
      desc: "Espontaneidade é sua zona de conforto. Você pensa rápido, se adapta fácil e não tem medo de experimentar, mesmo sem saber exatamente onde vai chegar.",
      values: "O freestyle é um dos exercícios mais puros do hip-hop: pensamento rápido, adaptação e coragem de errar em público. Sua forma de agir espelha essa liberdade criativa.",
      message: "Romper com o que se espera — inclusive do lugar que uma mulher deveria ocupar num cypher — é, em si, um gesto de liberdade. Cada vez que uma mulher pega o microfone sem pedir permissão, o espaço fica um pouco mais aberto para a próxima.",
      recommendation: "Procure por rodas de freestyle e cyphers brasileiros com participação feminina — muitos coletivos publicam essas gravações em vídeo, e é uma ótima porta de entrada para o improviso no rap."
    }
  };

  let currentQuestion = 0;
  const scores = { poeta: 0, guerreira: 0, ancestral: 0, freestyle: 0 };
  let locked = false;

  const screenStart = document.getElementById('screen-start');
  const screenQuiz = document.getElementById('screen-quiz');
  const screenResult = document.getElementById('screen-result');

  const qCurrentEl = document.getElementById('q-current');
  const qTotalEl = document.getElementById('q-total');
  const qPercentEl = document.getElementById('q-remaining-percent');
  const progressTrack = document.getElementById('progress-track');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  qTotalEl.textContent = questions.length;

  // build progress segments
  questions.forEach(() => {
    const seg = document.createElement('div');
    seg.className = 'progress-seg';
    const fill = document.createElement('i');
    seg.appendChild(fill);
    progressTrack.appendChild(seg);
  });
  const segments = progressTrack.querySelectorAll('.progress-seg');

  function showScreen(el){
    [screenStart, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
    el.classList.add('active');
  }

  function updateProgress(){
    qCurrentEl.textContent = currentQuestion + 1;
    const percent = Math.round((currentQuestion / questions.length) * 100);
    qPercentEl.textContent = percent + '% concluído';
    segments.forEach((seg, i) => {
      seg.classList.toggle('filled', i < currentQuestion);
    });
  }

  function renderQuestion(){
    locked = false;
    updateProgress();
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => selectOption(btn, opt));
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(btn, opt){
    if (locked) return;
    locked = true;

    scores[opt.profile]++;

    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(b => b.disabled = true);
    btn.classList.add('selected');

    // fill current segment fully to show it's answered
    segments[currentQuestion].classList.add('filled');

    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length){
        renderQuestion();
      } else {
        showResult();
      }
    }, 450);
  }

  function showResult(){
    qPercentEl.textContent = '100% concluído';
    let topProfile = 'poeta';
    let topScore = -1;
    Object.keys(scores).forEach(key => {
      if (scores[key] > topScore){
        topScore = scores[key];
        topProfile = key;
      }
    });

    const p = profiles[topProfile];
    document.getElementById('result-name').textContent = p.name;
    document.getElementById('result-title').textContent = p.title;
    document.getElementById('result-desc').textContent = p.desc;
    document.getElementById('result-values').textContent = p.values;
    document.getElementById('result-message').textContent = p.message;
    document.getElementById('result-recommendation').textContent = p.recommendation;

    showScreen(screenResult);
  }

  function resetQuiz(){
    currentQuestion = 0;
    Object.keys(scores).forEach(k => scores[k] = 0);
    segments.forEach(seg => seg.classList.remove('filled'));
    showScreen(screenQuiz);
    renderQuestion();
  }

  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen(screenQuiz);
    renderQuestion();
  });

  document.getElementById('btn-restart').addEventListener('click', resetQuiz);

})();