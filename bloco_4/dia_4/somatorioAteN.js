function somaDe1aN(n){
  let result = 0;
  for(let i = 1; i <= n; i += 1){
    result += i;
  }
  return result;
}
console.log(somaDe1aN(20));