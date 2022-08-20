function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function product(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(str, a, b) {
  if (str === "+") {
    return add(a, b);
  } else if (str === "-") {
    return sub(a, b);
  } else if (str === "*") {
    return product(a, b);
  } else if (str === "/") {
    return divide(a, b);
  }
}

const display = document.getElementById("display");
const operatingDisplay = document.getElementById("operating_value");
const inputDisplay = document.getElementById("input_value");
const clearAll = document.getElementById("AC");
const clear = document.getElementById("C");
const buttons = document.querySelectorAll(".displayable");
const operators = document.querySelectorAll(".operators");
const equals = document.getElementById("equals");

clearAll.addEventListener("click", () => {
  inputDisplay.textContent = "";
});

clear.addEventListener("click", () => {
  let expression = inputDisplay.textContent;
  inputDisplay.textContent = expression.substring(0, expression.length - 1);
});

for (const button of buttons) {
  button.addEventListener("click", () => {
    inputDisplay.textContent += button.textContent;
  });
}

for (const operator of operators) {
  operator.addEventListener("click", () => {
    inputDisplay.textContent = operation() + operator.textContent;
  });
}

equals.addEventListener("click", () => {
  inputDisplay.textContent = operation();
});

function operation() {
  let expression = inputDisplay.textContent;
  let result;
  if (expression.indexOf("+") != -1) {
    let expressionArray = expression.split("+");
    result = operate(
      "+",
      Number(expressionArray[0]),
      Number(expressionArray[1])
    );
  } else if (expression.indexOf("-") != -1) {
    let expressionArray = expression.split("-");
    result = operate(
      "-",
      Number(expressionArray[0]),
      Number(expressionArray[1])
    );
  } else if (expression.indexOf("*") != -1) {
    let expressionArray = expression.split("*");
    result = operate(
      "*",
      Number(expressionArray[0]),
      Number(expressionArray[1])
    );
  } else if (expression.indexOf("/") != -1) {
    let expressionArray = expression.split("/");
    result = operate(
      "/",
      Number(expressionArray[0]),
      Number(expressionArray[1])
    );
  } else {
    result = expression;
  }
  return result;
}
