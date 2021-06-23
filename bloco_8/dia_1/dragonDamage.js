const dragonDamage = strength => {
  const interval = strength - 14;
  return (Math.floor(Math.random() * interval)) + 15;
}

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};