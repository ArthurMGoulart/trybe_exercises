const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

const keyValue = (object, key, value) => {
  object[key] = value;
  return object;
}

console.log(keyValue(customer, "Altura", "1,87m"));