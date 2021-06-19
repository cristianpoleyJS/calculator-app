export default class Calculator {

    constructor (result) {
        this.result = result || '0'
    }

    get () {
        return this.result
    }

    sum (number) {
        this.result += number
    }

    subtract (number) {
        this.result -= number
    }

    multiply (number) {
        this.result *= number
    }

    divide (number) {
        this.result /= number
    }

    del () {
        this.result = this.result.substring(0, this.result.length - 1)
    }

    reset () {
        this.result = '0'
    }
}