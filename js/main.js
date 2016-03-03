var letter = prompt('Give me a letter');

for (i = 0; i < 10; i++) {

  for (k = i; k >= 0; k--) {
    document.write(letter);
  }
  document.write('<br>');
}

