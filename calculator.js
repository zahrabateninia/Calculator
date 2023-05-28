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

function displayNumber(number){
    let display= document.querySelector('.display');
    display.textContent = number;
}
function populate(e){
    let clickedNum = e.target.innerText;
    displayNumber(clickedNum);

}

let allNumbers = document.getElementsByClassName('number');

for(let i=0; i<allNumbers.length ; i++){
    const numbers = allNumbers[i];
    numbers.addEventListener('click', populate);
}
