const stringCounter = (letter, string) => {
  let cont = 0; // Criar um contador para receber o índice
  for (let i in string) {
    if (letter === string[i]) {
      cont++;
    }
  }
  console.log(`Essa letra aparece ${cont} vez(es)!`);
};

stringCounter("r", "ravel");
