// This is a class for the Calculator / Constructor
class Calculator{
    constructor(perviousOperandTextElement, currentOperandTextElement){
        this.perviousOperandTextElement = perviousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
}
// Clear Function
clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}
// Delete function
delete(){
this.currentOperand = this.currentOperand.toString().slice(0, -1)
}
// Append Number Function
appendNumber(number){
    if( number === '.' && this.currentOperand.includes('.'))return
this.currentOperand = this.currentOperand.toString() + number.toString()
}
// Choose Number function
chooseOperation(operation){
    if (this.currentOperand === '')return
    if (this.perviousOperand !== ''){
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}
// Compute function / All operations
compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current))return
    switch (this.operation){
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
             break;     
        default:
            return       
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
}
// Display Number Function
getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.'[0]));
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)){
        integerDisplay ='';
    }else{
        integerDisplay = integerDigits.toLocaleString('en',{
            maximumFractionDigits: 0});
    }
   if(decimalDigits != null){
       return `${integerDisplay}.${decimalDigits}`
   }else{
       return integerDisplay;
   }
   
}
// Updates Display Function
updateDisplay(){
this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null){
        this.perviousOperandTextElement.innerText = 
        `${this.getDisplayNumber(this.perviousOperand)} ${this.operation}`
        }else{
            this.perviousOperandTextElement.innerText = ''
        }
    }
}

// Const Variables for all Buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const perviousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(perviousOperandTextElement, currentOperandTextElement);
// Allows the numbers to be clicked and activated 
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});
// Activates the operations Buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});
// Equals Button 
equalsButtons.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
});
// Clear Button 
allClearButtons.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
});
// Delete Button
deleteButtons.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
});