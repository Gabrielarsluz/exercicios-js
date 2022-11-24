function code(meuObjeto) {
  for (caracteristicas in meuObjeto) {
    //[caracteristicas] promove o acesso dinâmico a cada valor/propriedade do objeto
    console.log(`Meu ${caracteristicas} é ${meuObjeto[caracteristicas]}`);
  }
}

code({
  nome: 'Lucas',
  cabelo: 'Preto',
  monitor: 'Grande',
  copo: 'Transparente',
  prato: 'Branco',
  sexo: 'Masculino',
});
module.exports = code;

// let entries = Object.entries(meuObjeto); //o entries tranforma o objeto em arrays
// for (entrie of entries) {
//   console.log(`Meu ${entrie[0]} é ${entrie[1]}.`); //${} = interpolação: é concatenar string com variável
