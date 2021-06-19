export default class Calculator {

    constructor (result) {
        this.result = result
    }

    sum (firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }

    subtract (firstNumber, secondNumber) {
        return firstNumber - secondNumber
    }

    multiply (firstNumber, secondNumber) {
        return firstNumber * secondNumber
    }

    divide (firstNumber, secondNumber) {
        return firstNumber / secondNumber
    }

    reset () {
        this.result = 0
        this._resetNumbers()
    }

    _resetNumbers () {
        this.firstNumber = 0
        this.secondNumber = 0        
    }
}