const wakeUp = () => `Acordando!!!`;

const breakFast = () => `Bora tomar café!!`;

const goToSleep = () => `Indo dormir!!`;

const doingThings = (action) => console.log(action());
// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakFast);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!