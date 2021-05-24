function maiorNome(nomes){
  let maiorNome = nomes[0];

  for(nome of nomes){
    if(nome.length > maiorNome.length){
      maiorNome = nome;
    }
  }

  return maiorNome;
}
let nomesTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(nomesTeste));