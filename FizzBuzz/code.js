function command(comando) {
  if (comando === 'exit') {
    console.log('tchau');
  } else if (comando === 'open') {
    console.log('abrir');
  } else if (comando === 'close') {
    console.log('fechar');
  }

  switch (comando) {
    case 'exit':
      console.log('tchau');
      break;
    case 'open':
      console.log('abrir');
      break;
    case 'close':
      console.log('fechar');
      break;
  }
}

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
module.exports = fizzbuzz;
