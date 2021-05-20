let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpares = 0;
for(numeroTeste of numbers){
  if(numeroTeste % 2 != 0){
    numImpares += 1;
  }
}
if(numImpares != 0){
  console.log(`Numero de impares é : ${numImpares}`);
}else{
  console.log("nenhum valor ímpar encontrado");
}