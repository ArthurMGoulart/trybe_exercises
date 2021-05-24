function valorEmDecimal(letra){
  let valor = 0;
  switch(letra){
    case 'I':
      valor = 1;
      break;
    case 'V':
      valor = 5;
      break;
    case 'X':
      valor = 10;
      break;
    case 'L':
      valor = 50;
      break;
    case 'C':
      valor = 100;
      break;
    case 'D':
      valor = 500;
      break;
    case 'M':
      valor = 1000;
      break;
  }
  return valor;
}
function separarAsLetrasEmDuplas(letras){
  let duplas = [];
  let comeco = 0;
  if(letras.length % 2 != 0){
    duplas.push(letras.charAt(0));
    comeco = 1;
  }
  for(let i = comeco; i < letras.length; i += 2){
    let dupla = letras.charAt(i) + letras.charAt(i + 1);
    duplas.push(dupla)
  }
  return duplas;
}
let teste = "CDXXVII";
console.log(separarAsLetrasEmDuplas(teste));