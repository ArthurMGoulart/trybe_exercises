let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for(testeMaior of numbers){
  if(testeMaior > maior){
    maior = testeMaior;
  }
}
console.log(maior);