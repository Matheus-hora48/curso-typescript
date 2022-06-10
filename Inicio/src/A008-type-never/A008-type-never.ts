// quando nunca vai retornar nada geralmente para erros

function criaErro(): never {
  throw new Error('Erro');
}
