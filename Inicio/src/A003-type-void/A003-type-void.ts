// void é quando um metodo ou uma função não retorna nada

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Hora',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Matheus', 'Hora');

export { pessoa };
