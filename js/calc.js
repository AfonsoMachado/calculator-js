/**
 * Função que recebe o tipo do botão e o valor, sendo o tipo
 * uma string que indica se é um 'valor' ou 'ação'
 * E o valor um numero ou uma operação
 *
 */
function calcular(tipo, valor) {
  // console.log(tipo, valor);

  // verifica se o tipo trata-se de uma acao ou valor
  if (tipo === 'acao') {
    if (valor == 'c') {
      // limpar o visor
      document.getElementById('resultado').value = '';
    }

    if (
      valor === '+' ||
      valor === '-' ||
      valor === '*' ||
      valor === '/' ||
      valor === '.'
    ) {
      document.getElementById('resultado').value += valor;
    }

    if (valor === '=') {
      // a função eval processa a string do input no contexto do javascript, ralizando os calculos
      let valor_campo = eval(document.getElementById('resultado').value);
      document.getElementById('resultado').value = valor_campo;
    }
  } else if (tipo === 'valor') {
    // vai acumulando os valores para exibir enfileirado no input
    // alterando o valor inserido no input
    document.getElementById('resultado').value += valor;
  }
}
