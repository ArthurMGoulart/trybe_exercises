const checkAnswers = (right, student, result) => result(right, student);

const equalArrayCounter = (array1, array2) => {
  let result = 0;
  for(let i = 0; i < array1.length; i += 1) {
    if(array2[i] === 'N.A') {
      continue;
    }
    array1[i] === array2[i] ? result += 1 : result -= 0.5;
  }
  return result;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, equalArrayCounter));