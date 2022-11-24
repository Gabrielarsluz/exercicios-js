const programador = {
  nome: 'Lucas',
  cabelo: 'Preto',
  monitor: 'Grande',
  copo: 'Transparente',
  caracteristicas: function () {
    //"Meu [propriedade]?? é [valor]"
    console.log(`Meu cabelo é ${this.cabelo}.`);
  },
};
console.log(programador.caracteristicas());
