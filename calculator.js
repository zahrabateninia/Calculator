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

//takes the num1 and num2 and the operator:

//...implement the code
//call the right function
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