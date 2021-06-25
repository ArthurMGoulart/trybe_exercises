const mageDmg = mage => {
  if (mage.mana < 15) {
    console.log('Não possui mana suficiente');
    return 0;
  }
  const minDmg = mage.inteligence;
  const maxDmg = mage.inteligence * 2;
  mage.mana -= 15;
  return Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
  
}