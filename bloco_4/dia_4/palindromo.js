function ehPalindromo(palavra){
  let palavraAoContrario = "";
  for(let i = palavra.length; i >= 0; i -= 1){
    palavraAoContrario += palavra.charAt(i);
  }
  if(palavra === palavraAoContrario){
    return true;
  }
  return false;
}
console.log(ehPalindromo("ovo"));