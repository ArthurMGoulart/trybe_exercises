const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const sports = {
  best: 'Basketball',
  nextToIt: 'Chess'
}

const clone = Object.assign(person, lastName);

Object.assign(clone, sports);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

const person2 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);