/* ==========================================================================
   Recife Conecta - script.js
   JavaScript puro, compartilhado entre index.html e pontos-turisticos.html.
   Sempre verifica se um elemento existe antes de manipulá-lo, para não gerar
   erros em páginas onde ele não está presente.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  atualizarAnoRodape();
  configurarFormularioNovidades();
  configurarFormularioRoteiro();
  configurarModalDetalhes();
});

/**
 * Atualiza automaticamente o ano exibido no rodapé.
 */
function atualizarAnoRodape() {
  var anoEl = document.getElementById('anoAtual');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
}

/**
 * Valida um e-mail com uma expressão simples, suficiente para uso didático.
 */
function emailValido(valor) {
  var padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(valor);
}

/**
 * Configura a validação do formulário de cadastro de novidades (modal),
 * presente apenas na página inicial.
 */
function configurarFormularioNovidades() {
  var form = document.getElementById('formNovidades');
  if (!form) {
    return;
  }

  var campoNome = document.getElementById('novidadesNome');
  var campoEmail = document.getElementById('novidadesEmail');
  var campoAceite = document.getElementById('novidadesAceite');
  var mensagemSucesso = document.getElementById('novidadesSucesso');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var valido = true;

    if (!campoNome.value.trim()) {
      campoNome.classList.add('is-invalid');
      valido = false;
    } else {
      campoNome.classList.remove('is-invalid');
    }

    if (!emailValido(campoEmail.value.trim())) {
      campoEmail.classList.add('is-invalid');
      valido = false;
    } else {
      campoEmail.classList.remove('is-invalid');
    }

    if (!campoAceite.checked) {
      campoAceite.classList.add('is-invalid');
      valido = false;
    } else {
      campoAceite.classList.remove('is-invalid');
    }

    if (!valido) {
      mensagemSucesso.classList.add('d-none');
      return;
    }

    mensagemSucesso.classList.remove('d-none');
    form.reset();
  });
}

/**
 * Configura a validação do formulário "Monte seu roteiro",
 * presente apenas na página de pontos turísticos.
 */
function configurarFormularioRoteiro() {
  var form = document.getElementById('formRoteiro');
  if (!form) {
    return;
  }

  var camposObrigatorios = form.querySelectorAll('[required]');
  var mensagemSucesso = document.getElementById('roteiroSucesso');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var valido = true;

    camposObrigatorios.forEach(function (campo) {
      var preenchido = true;

      if (campo.type === 'checkbox') {
        preenchido = campo.checked;
      } else {
        preenchido = campo.value.trim() !== '';
      }

      if (campo.type === 'email' && preenchido) {
        preenchido = emailValido(campo.value.trim());
      }

      if (!preenchido) {
        campo.classList.add('is-invalid');
        valido = false;
      } else {
        campo.classList.remove('is-invalid');
      }
    });

    if (!valido) {
      if (mensagemSucesso) {
        mensagemSucesso.classList.add('d-none');
      }
      return;
    }

    if (mensagemSucesso) {
      mensagemSucesso.classList.remove('d-none');
    }
    form.reset();
  });
}

/**
 * Preenche o modal de detalhes de cada ponto turístico com base nos
 * atributos data-nome e data-descricao do botão que o acionou.
 * Presente apenas na página de pontos turísticos.
 */
function configurarModalDetalhes() {
  var modal = document.getElementById('modalDetalhes');
  if (!modal) {
    return;
  }

  var titulo = document.getElementById('modalDetalhesLabel');
  var texto = document.getElementById('modalDetalhesTexto');

  modal.addEventListener('show.bs.modal', function (evento) {
    var botao = evento.relatedTarget;
    if (!botao) {
      return;
    }

    var nome = botao.getAttribute('data-nome') || 'Ponto turístico';
    var descricao = botao.getAttribute('data-descricao') || '';

    if (titulo) {
      titulo.textContent = nome;
    }
    if (texto) {
      texto.textContent = descricao;
    }
  });
}