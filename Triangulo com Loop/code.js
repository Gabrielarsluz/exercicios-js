function loop() {
  let hashtag = '#'; // a variável hashtag recebe a string '#'

  for (var i = 0; i < 7; i++) {
    /*aqui um loop for, onde a variáve i (de index)
     * recebe o valor zero (inicialização),
     * coloca uma condição de continuação,
     * ddeclara um incremento */
    console.log(hashtag);
    hashtag += '#';
  }
}

loop();

module.exports = loop;
