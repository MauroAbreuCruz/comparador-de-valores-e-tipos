/**

Atividade 1 - Comparação de valores e tipos em JavaScript

Este script compara dois valores inseridos pelo usuário,

verificando se têm o mesmo valor e se são do mesmo tipo.
*/

// Obtenção dos elementos do DOM
const numeroUm = document.getElementById('num1');
const stringUm = document.getElementById('string1');
const botao = document.getElementById('mostrar');
const botaoApagar = document.getElementById('apagar');
const inputs = document.querySelectorAll('#entrada input');
const conteudoDiv = document.getElementById('conteudo');

// Inicializa o elemento de resultado
const novoParagrafo = document.createElement('h2');
novoParagrafo.id = 'resultado';

/**

Função para verificar o tipo de um valor

@param {*} valor - Valor a ser verificado

@returns {string} - Tipo do valor (número ou texto)
*/
function verificarTipo(valor) {
  return typeof valor === 'number' ? 'número' : 'texto';
}

/**

Função para limpar os campos e o resultado
*/
function limparCampos() {
  inputs.forEach(input => {
    input.value = '';
  });
  conteudoDiv.innerHTML = '';
}

/**

Função para comparar os valores e exibir o resultado
*/
function compararValores() {
  const valor1 = numeroUm.value.trim();
  const string1 = stringUm.value.trim();

  if (valor1 === "" || string1 === "") {
    mostrarResultado('Por favor, preencha ambos os campos.');
    return;
  }

  const valor1Convertido = isNaN(valor1) ? valor1 : Number(valor1);
  const string1Convertida = isNaN(string1) ? string1 : Number(string1);

  const tipoValor1 = verificarTipo(valor1Convertido);
  const tipoString1 = verificarTipo(string1Convertida);

  if (valor1Convertido == string1Convertida) {
    if (tipoValor1 === tipoString1) {
      mostrarResultado(`As variáveis ${ valor1 } e ${ string1 } têm o mesmo valor e são do mesmo tipo(${ tipoValor1 }).`);
    } else {
      mostrarResultado(`As variáveis ${ valor1 } e ${ string1 } têm o mesmo valor, mas tipos diferentes(${ tipoValor1 } e ${ tipoString1 }).`);
    }
  } else {
    mostrarResultado(`As variáveis ${ valor1 } e ${ string1 } não têm o mesmo valor.`);
  }
}

/**

Função para exibir o resultado na página

@param {string} texto - Texto a ser exibido
*/
function mostrarResultado(texto) {
  conteudoDiv.innerHTML = '';
  novoParagrafo.textContent = texto;
  conteudoDiv.appendChild(novoParagrafo);
}

botaoApagar.addEventListener('click', limparCampos);
botao.addEventListener('click', compararValores);

inputs.forEach(input => {
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      compararValores();
    }
  });
});