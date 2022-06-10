// undefined é algo que ainda nao foi definido
export function createPerson(
  firstName: string,
  lastname?: string,
): {
  firstName: string;
  lastname?: string;
} {
  return {
    firstName,
    lastname,
  };
}

// null é um valor que nao existe
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (typeof squareOfTwo === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwo);
}
