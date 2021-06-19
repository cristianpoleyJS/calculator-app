<template>
    <Result :result="result"/>
    <section class="calculator">
        <div class="calculator-main-buttons">
            <button
                v-for="(button, ix) in buttonsCalculator"
                :key="ix"
                :class="{
                    'number': typeof button === 'number',
                    'action': typeof button === 'object' && button.text !== 'DEL',
                    'del': typeof button === 'object' && button.text === 'DEL'
                }"
                @click="handleButton(button)">
                {{ typeof button === 'object' ? button.text : button }}
            </button>
        </div>
        <div class="calculator-footer-buttons">
            <button class="calculator-footer-buttons-reset" @click="reset()">RESET</button>
            <button class="calculator-footer-buttons-result" @click="calculateResult()">=</button>
        </div>
    </section>
</template>

<script setup>
import Calculator from '../classes/Calculator'
import Result from './Result.vue'
import { ref } from 'vue'

const DEL = 'del'
const SUM = 'sum'
const SUBTRACT = 'subtract'
const COMMA = 'comma'
const DIVIDE = 'divide'
const MULTIPLY = 'multiply'

const result = ref(0)
const calculator = new Calculator(0, 0, 0)
const buttonsCalculator = [
    7, 8, 9,
    {
        text: 'DEL',
        function: DEL
    },
    4, 5, 6,
    {
        text: '+',
        function: SUM
    },
    1, 2, 3,
    {
        text: '-',
        function: SUBTRACT
    },
    {
        text: '.',
        function: COMMA
    },
    0,
    {
        text: '/',
        function: DIVIDE
    },
    {
        text: 'x',
        function: MULTIPLY
    }]

function handleButton (button) {
    if (typeof button === 'number') {
        this.handleButtonNumber(button)
    } else {
        this.handleButtonAction(button)
    }
}

function handleButtonNumber (number) {
    if (!calculator.getOperation()) {
        this.result = calculator.getFirstNumber().toString().concat(number.toString()) * 1
        calculator.setFirstNumber(this.result)
    } else {
        this.result = calculator.getSecondNumber().toString().concat(number.toString()) * 1
        calculator.setSecondNumber(this.result)
    }
}

function handleButtonAction (action) {
    if (action.function === this.DEL) {
        this.result = 0
        calculator.del()
    } else if (action.function === this.COMMA) {
        if (!calculator.getOperation() && !calculator.getFirstNumber().toString().includes('.')) {
            this.result = this.result.toString().concat('.')
            calculator.setFirstNumber(this.result)
        } else if (calculator.getOperation() && !calculator.getSecondNumber().toString().includes('.')) {
            this.result = this.result.toString().concat('.')
            calculator.setSecondNumber(this.result)
        }
    } else {
        calculator.setOperation(action.function)
    }
}

function calculateResult () {
    this.result = calculator.getResult()
}

function reset () {
    this.result = 0
    calculator.reset()
}
</script>

<style scoped>
    .calculator {
        padding: 1rem;
        background-color: var(--bg-calculator);
        border-radius: var(--border-radius);
    }

    .calculator-main-buttons {
        display: grid;
        grid-template-columns: 25fr 25fr 25fr 25fr;
        grid-gap: 1rem;
    }

    .calculator-main-buttons > button,
    .calculator-footer-buttons > button {
        text-align: center;
        vertical-align: middle;
        border-radius: var(--border-radius);
        cursor: pointer;
        min-width: 56px;
        height: var(--height-calculator-main-buttons);
        line-height: var(--line-height-calculator-main-buttons);
    }
    .calculator-main-buttons > button {
        font-size: var(--font-size-calculator-main-buttons);
    }

    .calculator-main-buttons > button.number {
        background-color: var(--bg-buttons-numbers);
        color: var(--buttons-numbers-color-text);
        box-shadow: 0px 3px 0px -0.1px var(--box-shadow-buttons-numbers);
    }
    .calculator-main-buttons > button.action {
        background-color: var(--bg-buttons-actions);
        color: var(--buttons-actions-color-text);
        box-shadow: 0px 3px 0px -0.1px var(--box-shadow-buttons-actions);
    }
    .calculator-main-buttons > button.del {
        background-color: var(--bg-button-del);
        color: var(--buttons-del-color-text);
        box-shadow: 0px 3px 0px -0.1px var(--box-shadow-button-del);
        font-size: var(--font-size-button-del-reset);
        font-weight: 600;
    }

    .calculator-footer-buttons {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 50fr 50fr;
        grid-gap: 1rem;
    }
    
    .calculator-footer-buttons-reset {
        background-color: var(--bg-button-reset);
        color: var(--buttons-reset-color-text);
        box-shadow: 0px 3px 0px -0.1px var(--box-shadow-button-reset);
        font-size: var(--font-size-button-del-reset);
        font-weight: 600;
    }

    .calculator-footer-buttons-result {
        background-color: var(--bg-button-result);
        color: var(--buttons-result-color-text);
        box-shadow: 0px 3px 0px -0.1px var(--box-shadow-button-result);
        font-size: 14px;
        font-weight: 600;
    }

    .calculator-main-buttons > button.number:active {
        box-shadow: 0px 1.5px 0px -0.1px var(--box-shadow-buttons-numbers);
    }
    .calculator-main-buttons > button.action:active {
        box-shadow: 0px 1.5px 0px -0.1px var(--box-shadow-buttons-actions);
    }
    .calculator-main-buttons > button.del:active {
        box-shadow: 0px 1.5px 0px -0.1px var(--box-shadow-button-del);
    }
    .calculator-footer-buttons-reset:active {
        box-shadow: 0px 1.5px 0px -0.1px var(--box-shadow-button-reset);
    }
    .calculator-footer-buttons-result:active {
        box-shadow: 0px 1.5px 0px -0.1px var(--box-shadow-button-result);
    }
</style>