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
    if (operator === "*"){
        return multiply(num1,num2);
    }
    
}
//***********/
let allNumbers = document.getElementsByClassName('number');
for(let i=0; i<allNumbers.length ; i++){
    const numbers = allNumbers[i];
    // console.log(numbers);
    numbers.addEventListener('click', populate);
}

function populate(e){
    let clickedBtn = e.target.innerText;
    displayValue(clickedBtn);
    
}
//***********/
let allOperators = document.getElementsByClassName('operator');
for(let j=0; j<allOperators.length; j++){
    const operators = allOperators[j];
    console.log(operators);
    operators.addEventListener('click' ,setOperator);
}
function setOperator(e){
    let operator = e.target.innerText;
    console.log(operator);
    displayValue(operator);
}
//***********/

let display= document.querySelector('.display');
function displayValue(clickedBtn){
    display.textContent += clickedBtn;

}