function indiceMenorValor(arr){
  let result = 0;
  let menor = arr[0];

  for(let i = 0; i < arr.length; i += 1){
    if(menor > arr[i]){
      result = i;
      maior = arr[i];
    }
  }

  return result;
}
let arrayTeste = [1, 2, 5, -1, 2, 100];
console.log(indiceMenorValor(arrayTeste));