let n = 7;
let nEspacosIniciais = Math.floor(n/2);
let stringEspace = "";
let stringAsterisk = "*";
for(let i = 0; i < nEspacosIniciais; i++){
  stringEspace += " ";
}
for(let i = 0; i < (Math.ceil(n/2)); i++){
  let finalString = stringEspace + stringAsterisk;
  stringAsterisk += "**";
  stringEspace = stringEspace.substring(0, stringEspace.length - 1);
  console.log(finalString);
}