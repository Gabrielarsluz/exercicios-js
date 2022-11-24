function countBs(word) {
  /**
   * percorrer a variavel word (for? while?)
   * em cada letra, verificar se ela é igual a B maiusculo
   * se for igual, somo + 1 a uma variavel de controle
   */
  let counter = 0;
  for (character of word) {
    if (character === 'B') {
      counter += 1;
    }
  }
  return counter;
  console.log(counter);
  //return countChar(word, 'B');
}
console.log(countBs('BBCB'));

function countChar(word, char) {
  /**
   * percorrer a variavel word (for? while?)
   * em cada letra, verificar se ela é igual a variavel char
   * se for igual, somo + 1 a uma variavel de controle
   */
  let counter = 0;
  for (character of word) {
    if (character === char) {
      counter = counter + 1;
    }
  }
  return counter;
}
console.log(countChar('BBCB', 'C'));

module.exports = {
  countBs,
  countChar,
};
