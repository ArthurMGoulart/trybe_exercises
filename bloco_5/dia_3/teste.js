function solution(str, ending){
  for(let i = ending.length - 1; i < str.length; i += 1){
    let count = 0;
    console.log(str.charAt(i));
    if(str.charAt(i) !== ending.charAt(count)){
      console.log((str.charAt(i) + ending.charAt(count)));
      return false;
    }
  }
  return true;
}
console.log(solution("abc", "bc"));