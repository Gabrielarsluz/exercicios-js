// function minimo() {
//   // será que value poderia ser escrito dentro dos parentesis com suas regras?
//   let value1 = ''; //prompt('Digite um número: ', ''); // como garantir que aqui recebe um número e não qualquer caracter?
//   let value2 = ''; //prompt('Digite só mais um número: ', '');
//   if (value1 > value2) {
//     console.log(value2);
//   } else if (value1 < value2) {
//     console.log(value1);
//   } else if (value1 !== Number ||value2 !== Number ) {
//     // como garantir que aqui seja um numero?
//     console.log('Por favor digite um numero');
// }
// minimo();

function minimo(value1, value2) {
  if (value1 > value2) {
    return value2;
  } else {
    return value1;
  }
}
console.log(minimo(50, 100));

module.exports = minimo;
