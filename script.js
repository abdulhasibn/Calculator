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
  if (b === 0) {
    alert("Cannot divide by zero.!");
  }
  return a / b;
}
function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function operate(str, a, b) {
  if (str === "+") {
    return add(a, b);
  } else if (str === "-") {
    return sub(a, b);
  } else if (str === "*") {
    return product(a, b);
  } else if (str === "/") {
    return round(divide(a, b), 4);
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
const dot = document.getElementById("dot");

clearAll.addEventListener("click", () => {
  makeEmpty();
});

clear.addEventListener("click", () => {
  deleteChar();
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
window.addEventListener("keydown", (e) => {
  if (
    (e.code.includes("Numpad") && !e.code.includes("NumpadEnter")) ||
    e.code.includes("Digit")
  ) {
    inputDisplay.textContent += e.key;
  } else if (
    e.code.includes("Equal") ||
    e.code.includes("Enter") ||
    e.code.includes("NumpadEnter")
  ) {
    getResult();
  } else if (e.code.includes("Backspace")) {
    deleteChar();
  } else if (e.code.includes("Delete")) {
    makeEmpty();
  }
});

equals.addEventListener("click", () => {
  getResult();
});
function getResult() {
  inputDisplay.textContent = operation();
}
function deleteChar() {
  let expression = inputDisplay.textContent;
  inputDisplay.textContent = expression.substring(0, expression.length - 1);
}
function makeEmpty() {
  inputDisplay.textContent = "";
}
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
