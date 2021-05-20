let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicados = [];
for(let i = 0; i < numbers.length; i += 1){
  if(i == numbers.length - 1){
    multiplicados.push(numbers[i] * 2);
  }else{
    multiplicados.push(numbers[i] * numbers[i + 1]);
  }
}
console.log(multiplicados);
