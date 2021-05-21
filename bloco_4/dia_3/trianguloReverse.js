let n = 5;
let stringAst = "";
let stringEspace = "";
for(let i = 0; i < n - 1; i++){
  stringEspace += " ";
}
console.log(stringEspace);
for(let i = 0; i < n; i++){
  stringAst += "*";
  let finalString = stringEspace + stringAst;
  stringEspace = stringEspace.substring(0, stringEspace.length - 1);
  console.log(finalString);
}