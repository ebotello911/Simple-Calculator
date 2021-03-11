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

}
compute(){

}
updateDisplay(){
this.currentOperandTextElement.innerText = this.currentOperand
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