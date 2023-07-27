function calculator(number1, number2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        throw new Error("Invalid operator");
    }
    return result;
  }
  
  console.log(calculator(10, 2, "+")); // 12
  console.log(calculator(10, 2, "-")); // 8
  console.log(calculator(10, 2, "*")); // 20
  console.log(calculator(10, 2, "/")); // 5
  