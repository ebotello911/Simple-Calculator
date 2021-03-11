class Calculator{
    constructor(perviousOperandTextElement, currentOperandTextElement){
        this.perviousOperandTextElement = perviousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
}

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}
delete(){

}
appendNumber(number){
    if( number === '.' && this.currentOperand.includes('.'))return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if (this.currentOperand === '')return
    if (this.perviousOperand !=== ''){
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}
compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current))return
    switch (this.operation){
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
             break     
        default:
            return       
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
updateDisplay(){
this.currentOperandTextElement.innerText = this.currentOperand
this.perviousOperandTextElement.innerText = this.perviousOperand
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const perviousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(perviousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

equalsButtons.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
});

allClearButtons.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
});