const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortUpper = array => {
  for(let k = 0; k < array.length; k += 1){
    for(let i = 0; i < array.length; i += 1) {
      let tempo = array[i];
      array[i] < array[i + 1] ? (array[i] = array[i + 1], array[i + 1] = tempo) : tempo = 0;
    }
  }
  return array;
}

console.log(sortUpper(oddsAndEvens));