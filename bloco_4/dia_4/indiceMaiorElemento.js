function indiceMaiorValor(arr){
  let result = 0;
  let maior = arr[0];

  for(let i = 0; i < arr.length; i += 1){
    if(maior < arr[i]){
      result = i;
      maior = arr[i];
    }
  }

  return result;
}
let arrayTeste = [1, 2, 5, 10, 2, 100];
console.log(indiceMaiorValor(arrayTeste));