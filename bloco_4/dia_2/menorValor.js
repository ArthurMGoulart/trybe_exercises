let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for(testeMenor of numbers){
  if(testeMenor < menor){
    menor = testeMenor;
  }
}
console.log(`Este é o menor numero: ${menor}`);