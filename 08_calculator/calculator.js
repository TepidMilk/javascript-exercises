const add = function() {
	let args = Array.from(arguments);
  let add = 0
  args.forEach((item) => add += item);
  return add;
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function(array) {
	let sum = 0
  array.forEach((item) => sum += item)
  return parseInt(sum)
};

const multiply = function(array) {
  let multiple = 1
  array.forEach((item) => multiple *= item)
  return parseInt(multiple)
};

const power = function() {
	return arguments[0]**arguments[1]
};

const factorial = function() {
	let factor = 1
  if (arguments[0] == 0){
    return 1
  }
  for (i = 1; i <= arguments[0]; i++){
    factor *= i;
  }
  return factor
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
