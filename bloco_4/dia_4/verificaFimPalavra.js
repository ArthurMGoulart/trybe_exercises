function verificaFimPalavra(palavra, fim){
  let calculoI = palavra.length - fim.length;
  let finalDaPalavra = "";
  for(let i = calculoI; i < palavra.length; i += 1){
    finalDaPalavra += palavra.charAt(i);
  }
  console.log(finalDaPalavra);
  if(finalDaPalavra === fim){
    return true;
  }
  return false;
}
console.log(verificaFimPalavra("joaofernando", "rnando"));