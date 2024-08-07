const add = function(first, second) {
	return first + second;
};

const subtract = function(first , second) {
	return first - second;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum += element;
  });
	return sum;
};

const multiply = function(numbers) {
  let total = 1;
 numbers.forEach(element => {
  total *= element;
 });
 return total;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
	let fact = 1;
  while(number > 0){
    fact *= number;
    number--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
