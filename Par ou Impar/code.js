// Consideramos um número como sendo par quando o dividimos por dois e seu resto é zero.
// Já um número é ímpar quando, na divisão por dois, o resto é diferente de zero.

function isEven(n) {
  //     Faça com que sua função saiba somente duas verdades:
  // Quando um número diferente de 0 ou 1 for recebido, faça N - 2 e
  // cheque novamente entre as duas verdades que sua função conhece.
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n < 0) return isEven(n + 2);
  else return isEven(n - 2);
}
console.log(isEven(75));

module.exports = isEven;
