import React, { Component } from "react";
import Button from '../components/Button/Button';
import Display from "../components/Display/Display";
import './Calculator.css'





const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
 
class Calculator extends Component {

    state = {...initialState}

    constructor (props)  {

    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.clearMemory.bind(this)
    this.addDigit = this.clearMemory.bind(this)
    }




clearMemory = () => {
    this.setSate({ ...initialState })
}

setOperation = (operation) => {
    if (this.state.current === 0) {
        this.setState({ operation, current: 1, clearDisplay: true })
    } else {
        const equals = operation === '='
        const currentOperation = this.state.operation

        const values = [...this.state.values]
        values[0] = eval(`${values[0]} ${values[0]} ${currentOperation} ${values[1]}`)
        values[1] = 0

        this.setState({
            displayValue: values[0],
            operation: equals ? 0 : 1,
            clearDisplay: !equals,

        })
    }

}

addDigit (numero) {
    
    if (numero === '.' && this.state.displayValue.includes('.')) { // Essa regra é para não aceitar um valor inválido. Por exemplo 43.75.89

        return
    }
    const clearDisplay = this.state.displayValue === '0'  // para não aceitar zero a esquerda
        || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + numero
    this.setState({ displayValue, clearDisplay: false })

    if (numero !== '.') {
        const indice = this.state.current
        const novoValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[indice] = novoValue
        this.setState({ values })

    }

}



render() {

    return (
        <div className="calculator">
            <Display value={this.state.displayValue} />
            <Button label="AC" triple clear={this.clearMemory}  />
            <Button label="/" operation click={this.setOperation} />
            <Button label="7" click={this.addDigit} />
            <Button label="8" click={this.addDigit} />
            <Button label="9" click={this.addDigit} />
            <Button label="*" operation click={this.setOperation} />
            <Button label="4" click={this.addDigit} />
            <Button label="5" click={this.addDigit} />
            <Button label="6" click={this.addDigit} />
            <Button label="-" operation click={this.setOperation} />
            <Button label="1" click={this.addDigit} />
            <Button label="2" click={this.addDigit} />
            <Button label="3" click={this.addDigit} />
            <Button label="+" operation click={this.setOperation} />
            <Button label="0" double click={this.addDigit} />
            <Button label="." click={this.addDigit} />
            <Button label="=" operation click={this.setOperation} />
        </div>
    )
}
    

}export default Calculator
