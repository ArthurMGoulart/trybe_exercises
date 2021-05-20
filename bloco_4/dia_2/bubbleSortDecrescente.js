let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1){
  for(let k = 0; k < numbers.length - i; k += 1){
    if(numbers[k] < numbers[k + 1]){
      let aux = numbers[k];
      numbers[k] = numbers[k + 1];
      numbers[k + 1] = aux;
    }
  }
}
console.log(numbers);