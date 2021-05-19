let peca = "torre"
switch(peca.toLowerCase()){
  case "cavalo":
    console.log("Em L");
    break;
  case "bispo":
    console.log("Diagonais");
    break
  case "rainha":
    console.log("Diagonais e Linhas");
    break
  case "peão":
    console.log("Dois para frente caso primeira jogada, um para frente, captura um em diagonal");
    break;
  case "rei":
    console.log("Um para qualquer direcao");
    break;
  case "torre":
    console.log("Linhas");
    break;
  default:
    console.log("Erro");
}