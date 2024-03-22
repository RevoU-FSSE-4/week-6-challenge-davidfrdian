function sumOfEvens(numbers) {
  var sum = 0;
  for (var number = 0; number < numbers.length; number++) {
    if (numbers[number] % 2 === 0) {
      sum += numbers[number];
    }
  }
  return sum;
}

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvens(numbersArray));

module.exports = sumOfEvens;
