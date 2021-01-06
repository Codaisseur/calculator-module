const calculator = require("./calculator");

describe("calculator", () => {
  test("should complain if the number of arguments is incorrect", () => {
    expect(() => {
      calculator("+", 1);
      // IMPORTANT!! DO NOT CHANGE THIS
      // The client needs the error to be in this exact format
    }).toThrowError(/^INCORRECT_NUMBER_OF_ARGUMENTS: 3 arguments expected$/);

    expect(() => {
      calculator("+", 1, 2, 3);
      // IMPORTANT!! DO NOT CHANGE THIS
      // The client needs the error to be in this exact format
    }).toThrowError(/^INCORRECT_NUMBER_OF_ARGUMENTS: 3 arguments expected$/);
  });

  test("should complain if operator is unknown", () => {
    expect(() => {
      calculator("test", 1, 2);
      // IMPORTANT!! DO NOT CHANGE THIS
      // The client needs the error to be in this exact format
    }).toThrowError(/^OPERATOR_UNKNOWN: "test"$/);
  });

  test("should complain if n1 is not a number", () => {
    expect(() => {
      calculator("+", "one", 2);
    }).toThrowError(/^one is not a number$/);
  });

  test("should complain if n2 is not a number", () => {
    expect(() => {
      calculator("+", 1, "two");
    }).toThrowError(/^two is not a number$/);
  });

  test("should complain if denominator is zero", () => {
    // You might think this would never happen
    // but you'd be surprised
    expect(() => {
      calculator("/", 1, 0);
    }).toThrowError(/^Cannot divide by 0$/);

    expect(() => {
      calculator("%", 1, 0);
    }).toThrowError(/^Cannot divide by 0$/);
  });

  test("should successfully run basic math operations if arguments are correct", () => {
    expect(calculator("+", 10, 2)).toBe(12);
    expect(calculator("+", 20, 2)).toBe(22);
    expect(calculator("+", 100, 5)).toBe(105);

    expect(calculator("-", 10, 2)).toBe(8);
    expect(calculator("-", 20, 2)).toBe(18);
    expect(calculator("-", 100, 5)).toBe(95);

    expect(calculator("*", 10, 2)).toBe(20);
    expect(calculator("*", 20, 2)).toBe(40);
    expect(calculator("*", 100, 5)).toBe(500);

    expect(calculator("/", 10, 2)).toBe(5);
    expect(calculator("/", 20, 2)).toBe(10);
    expect(calculator("/", 100, 5)).toBe(20);

    expect(calculator("%", 10, 3)).toBe(1);
    expect(calculator("%", 20, 3)).toBe(2);
    expect(calculator("%", 100, 3)).toBe(1);
  });
});
