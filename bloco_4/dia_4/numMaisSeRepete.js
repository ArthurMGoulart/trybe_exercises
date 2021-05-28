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
function numMaisFrequente(numeros){
  let contadorDeFrequencia = [0];
  for(let i = 0; i < numeros.length; i += 1){
    if(contadorDeFrequencia[numeros[i]] === undefined){
      contadorDeFrequencia[numeros[i]] = 0;
    }
    contadorDeFrequencia[numeros[i]] += 1;
  }
  let result = indiceMaiorValor(contadorDeFrequencia);
  return result;
}
let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(numMaisFrequente(teste));