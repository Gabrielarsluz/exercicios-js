class Calculadora {
  somar(a, b) {
    return a + b;
  }
  subtrair(a, b) {
    return a - b;
  }
  dividir(a, b) {
    return a / b;
  }
  multiplicar(a, b) {
    return a * b;
  }
}

const calc = new Calculadora();
calc.somar(1, 3);
calc.subtrair(2, 1);
calc.dividir(4, 2);
calc.multiplicar(4, 2);
module.exports = Calculadora;
