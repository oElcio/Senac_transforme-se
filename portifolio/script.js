/* ==========================================================================
   Portfólio - Elcio Ferreira - script.js
   JavaScript puro. Sempre verifica se um elemento existe antes de
   manipulá-lo, para não gerar erros caso a página seja alterada no futuro.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  atualizarAnoRodape();
  configurarFormularioContato();
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
 * Configura a validação do formulário de contato.
 */
function configurarFormularioContato() {
  var form = document.getElementById('formContato');
  if (!form) {
    return;
  }

  var camposObrigatorios = form.querySelectorAll('[required]');
  var mensagemSucesso = document.getElementById('contatoSucesso');
  var campoEmail = document.getElementById('contatoEmail');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var valido = true;

    camposObrigatorios.forEach(function (campo) {
      var preenchido = campo.type === 'checkbox' ? campo.checked : campo.value.trim() !== '';

      if (campo === campoEmail && preenchido) {
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
 * Preenche o modal de detalhes com base nos atributos data-titulo e
 * data-descricao do botão que o acionou.
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

    var tituloTexto = botao.getAttribute('data-titulo') || 'Detalhes';
    var descricao = botao.getAttribute('data-descricao') || '';

    if (titulo) {
      titulo.textContent = tituloTexto;
    }
    if (texto) {
      texto.textContent = descricao;
    }
  });
}