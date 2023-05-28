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
//variables
let operator='';
let num1='';
let num2='';
// Create a new function operate that takes an operator and 
//2 numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2){
    if (operator === "-"){
        return subtract(num1,num2);
    }
    
    if (operator === "+"){
        return add(num1,num2);
    }
    if (operator === "÷"){
        return divide(num1,num2);
    }
    if (operator === "×"){
        return multiply(num1,num2);
    }
    
}
//display the numbers when clicked:

function displayNumber(number){
    let displayNumber = document.querySelector('.display');
    displayNumber.textContent = number;
}

function populate(e){


}