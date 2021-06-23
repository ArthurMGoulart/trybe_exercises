const lottery = (bet, generator) => {
  const check = generator(bet);
  let text = '';
  return check ? `Parabéns você ganhou` : 
  `Tente novamente`
}

const checkBet = number => {
  const random = Math.floor(Math.random() * 10) + 1;
  console.log(random);
  return (number === random);
}

console.log(lottery(1, checkBet));