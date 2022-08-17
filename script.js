function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function product(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(str, a, b){
    if (str === "+"){
        return add(a,b);
    } else if (str === "-"){
        return sub(a,b);
    } else if (str === "*"){
        return product(a,b);
    } else if (str === "/"){
        return divide(a,b);
    } 
}
console.log(operate("+", 56, 101));