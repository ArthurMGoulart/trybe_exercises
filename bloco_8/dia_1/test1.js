const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const addOnePrint = number => console.log(number + 1);

repeat(5, addOnePrint);