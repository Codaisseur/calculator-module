module.exports = function calculator(operator, x, y) {
  if (arguments.length !== 3) {
    throw Error("INCORRECT_NUMBER_OF_ARGUMENTS: 3 arguments expected");
  }

  if (isNaN(x)) {
    throw Error(`${x} is not a number`);
  }
  if (isNaN(y)) {
    throw Error(`${y} is not a number`);
  }

  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y === 0) {
        throw Error("Cannot divide by 0");
      }
      return x / y;
    case "%":
      if (y === 0) {
        throw Error("Cannot divide by 0");
      }
      return x % y;
    default:
      throw Error(`OPERATOR_UNKNOWN: "${operator}"`);
  }
};
