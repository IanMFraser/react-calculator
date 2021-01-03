import React, {useState} from 'react'
import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
    const [firstOperand , setFirstOperand] = useState(null)
    const [secondOperand , setSecondOperand] = useState('0')
    const [operator , setOperator] = useState(null)

    const operations =  {
        "+": (a, b) => parseInt(a, 10) + parseInt(b, 10),
        "-": (a, b) => parseInt(a, 10) - parseInt(b, 10),
        "*": (a, b) => parseInt(a, 10) * parseInt(b, 10),
        "/": (a, b) => parseInt(a, 10) / parseInt(b, 10)
    }

    const getDecimal = () => {
        setSecondOperand(secondOperand.includes('.') ? '' : secondOperand + '.')
    }

    const getNegative = () => {
        setSecondOperand(secondOperand * -1)
    }

    const getPercent = () => {
        setSecondOperand(secondOperand / 100)
    }

    const clear = () => {
        setSecondOperand('0')
        setFirstOperand(null)
        setOperator(null)
    }

    const calculate = () => {
        setSecondOperand(operations[operator](firstOperand, secondOperand))
        setFirstOperand(null)
        setOperator(null)
    }

    const onClick = value => {
        //did you press a number?
        if(!isNaN(value)){
            setSecondOperand(secondOperand === '0' || operator ? value : secondOperand + value) 
        }
        //or did you press an operator?
        if(value in operations) {
            setOperator(value)
            setFirstOperand(secondOperand)
            setSecondOperand('0')
        }
        //clear
        if(value === 'AC') {
            clear()
        }
        //percentage
        if(value === '%') {
            getPercent()
        }
        //decimal
        if(value === '.') {
            getDecimal()
        }
        //negative/positive
        if(value === '+/-') {
            getNegative()
        }
        //give answer
        if(value === "=") {
            calculate()
        }

    }

    return (
        <div className="Calculator">
            <Display result={secondOperand}/>
            <Keypad onClick={onClick}/>
        </div>
    );
}

export default Calculator