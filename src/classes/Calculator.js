export default class Calculator {

    constructor (firstNumber, secondNumber, result) {
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
        this.result = result
        this.operation = ''
    }

    getFirstNumber () {
        return this.firstNumber
    }

    getSecondNumber () {
        return this.secondNumber
    }

    getOperation () {
        return this.operation
    }

    getResult () {
        if (this.operation) {
            const result = this[this.operation]()
            this.reset()
            this.setFirstNumber(result)
            return result
        }
        return this.firstNumber
    }

    setFirstNumber (number) {
        this.firstNumber = number
    }

    setSecondNumber (number) {
        this.secondNumber = number
    }

    setOperation (operation) {
        this.operation = operation
    }

    sum () {
        return this.firstNumber + this.secondNumber
    }

    subtract () {
        return this.firstNumber - this.secondNumber
    }

    multiply () {
        return this.firstNumber * this.secondNumber
    }

    divide () {
        return this.firstNumber / this.secondNumber
    }

    del () {
        this.secondNumber > 0
        ? this.setSecondNumber(0)
        : this.setFirstNumber(0)
    }

    reset () {
        this.result = 0
        this.setSecondNumber(0)
        this.setFirstNumber(0)
        this.setOperation('')
    }
}