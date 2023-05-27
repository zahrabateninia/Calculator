function add(num1,num2){
    let add = num1 + num2;
    return add;
};
function divide(num1,num2){
    let divide = num1/num2;
    return divide;
};
function subtract(num1,num2){
    let subtract = num1 - num2;
    return subtract;
}
function multiply(num1,num2){
    let multiply = num1 * num2;
    return multiply;
}

let operator='';
let num1='';
let num2='';

function operate(operator){
    if (operator === "-"){
        return subtract();
    }
    
    if (operator === "+"){
        return add();
    }
    if (operator === "÷"){
        return divide();
    }
    if (operator === "×"){
        return multiply();
    }
    
}
//display the numbers when clicked:

function displayNumber(number){
    let displayNumber = document.querySelector('.display');
    displayNumber.textContent = number;
}