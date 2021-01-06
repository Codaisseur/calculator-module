module.exports = function calculator(operator, x, y) {
  if (isNaN(x)) {
    throw Error(`${x} is not a number`);
  }
  if (isNaN(y)) {
    throw Error(`${y} is not a number`);
  }

  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) {
      throw Error("Cannot divide by 0");
    }
    return x / y;
  } else if (operator === "%") {
    if (y === 0) {
      throw Error("Cannot divide by 0");
    }
    return x % y;
  } else {
    throw Error(`OPERATOR_UNKNOWN: "${operator}"`);
  }
};
