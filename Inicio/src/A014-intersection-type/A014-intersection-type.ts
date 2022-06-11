//& -> and

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //and

const pessoa: Pessoa = {
  idade: 20,
  nome: 'Matheus',
  sobrenome: 'Hora',
};

console.log(pessoa);

// Module mode
export { pessoa };
