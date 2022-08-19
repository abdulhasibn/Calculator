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
const buttons = document.querySelectorAll(".displayable");
const display = document.getElementById("display");
const inputDisplay = document.getElementById("input_value");
const operatingDisplay = document.getElementById("operating_value");
const allClear = document.getElementById("AC");
const clear = document.getElementById("C");
const operators = document.querySelectorAll(".operators");
const equals = document.getElementById("equals");

allClear.addEventListener("click", () => {
  display.innerText = "";
});

clear.addEventListener("click", () => {});

for (const button of buttons) {
  button.addEventListener("click", () => {
    inputDisplay.innerText += button.innerText;
    const valueOne = inputDisplay.innerText;
  });
}

for (const operator of operators) {
  operator.addEventListener("click", () => {
    const operatorOne = operator.innerText;
    operatingDisplay.innerText += inputDisplay.innerText;
  });
}
