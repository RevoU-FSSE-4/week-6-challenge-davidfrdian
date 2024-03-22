function sumClassifier(numbers) {
  var sum = 0;
  for (var number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }

  return sum > 10 ? "Large Sum" : sum === 10 ? "Equal Sum" : "Small Sum";
}

var numbersArray = [1, 2, 3, 4, 5];
console.log(sumClassifier(numbersArray));

module.exports = sumClassifier;
