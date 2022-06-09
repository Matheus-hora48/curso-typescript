/* eslint-disable */

//Todos os tipos basicos
const nome:string = 'Matheus';
const idade: number = 20
const adulto: boolean = true
const simbolo: symbol = Symbol('Qualquer')
//const big: bigint = 10n

// arrays
const arrNumber: Array<number> = [1,2,3]
const arrNumberTwo: number[] = [1,2,3]
const arrString: Array<string> = ['a', 'b']
const arrStringTwo: string[] = ['a', 'b']


//Objetos
let pessoa: {
  nome:string,
  idade:Number,
  adulto?:boolean
} = {
  idade:30,
  nome: 'Matheus'
}

//Funções
function soma(x:number, y:number): number{
  return x + y
}
