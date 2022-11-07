const sumOfNegative = (numbers) => {
  let sum = 0;
  numbers.forEach((element) => {
    if (element < 0) {
      sum += element;
    }
  });
  return sum;
};

module.exports = sumOfNegative; // Do not remove.

console.log(sumOfNegative([-4, 5, -2, 9]));
