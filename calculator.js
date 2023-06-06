let operator='';
let num1='';
let num2='';
let isFirstNum = true;

function operate(operator, num1, num2){
    if (operator === "-"){
        return num1 - num2;
    }
    
    if (operator === "+"){
        return num1 + num2;
    }
    if (operator === "÷"){
        return num1/num2;
    }
    if (operator === "×"){
        return num1 * num2;
    }
}
//***********/
let allNumbers = document.getElementsByClassName('number');
for(let i=0; i<allNumbers.length ; i++){
    const numbers = allNumbers[i];
    numbers.addEventListener('click', populate);
}

function populate(e){
    let num = e.target.innerText;
    if (isFirstNum){
        num1 = num1.concat(num);
        console.log('first num')
        displayValue(num1);
    }else{
        num2 = num2.concat(num);
        console.log('second num')
        displayValue(num2);
    }
  
   }

//***********/
let allOperators = document.getElementsByClassName('operator');
for(let j=0; j<allOperators.length; j++){
    const operators = allOperators[j];
    operators.addEventListener('click' ,setOperator);
}
function setOperator(e){
    operator = e.target.innerText;
    displayValue(operator);
    isFirstNum = false;
}
//***********/

let display= document.querySelector('.display');
function displayValue(){
    // display.textContent = clickedBtn;
    display.textContent = num1 + operator + num2;
    

}

//AC button if clicked clear the display screen 
let acBtn = document.querySelector('.ac');
acBtn.addEventListener('click', clearScreen);
function clearScreen(e){
    display.textContent = '';
    //reset the numbers
    num1='';
    num2='';
    operator = '';
    isFirstNum = true;
}

//once operate() has been called, update 
//the display with the ‘solution’ to the operation.
let equalSign = document.querySelector('.equalSign');
equalSign.addEventListener('click', displaySolution)
function displaySolution(){
    let solution = operate(operator, parseInt(num1), parseInt(num2));
    display.textContent = solution;
    num1= solution;
    num2= '';
}

//Pressing = before entering all of the numbers or an operator 
//could cause problems!


//Display a snarky error message if the user tries to 
//divide by 0… and don’t let it crash your calculator!


//You should round answers with long decimals so that 
//they don’t overflow the screen.