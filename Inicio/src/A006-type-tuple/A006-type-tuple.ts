// o readonly colocando ele voce nao consegue mudar a arr
const dadosCliente1: readonly [number, string] = [1, 'Matheus'];
const dadosCliente2: [number, string, string?] = [2, 'Matheus'];

console.log(dadosCliente1);
console.log(dadosCliente2);
