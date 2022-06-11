// condicional - quando nao tem certeza
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// assertion - quando tem certeza
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//htmlElemente
const input = document.querySelector('.input') as HTMLBodyElement;
//input.value = 'Qualquer coisa';
input.focus;
