import React, { Component } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import './Calculator.css'


class Calculator extends Component {


    state = {
        displayValue:'0',
        numA: null,
        numB: null
    }
    clearMemory = () => {
        this.setState({displayValue: 0 })
    }

    setOperation= (operation) => {
        this.setState({displayValue:operation})
    }

    addDigit = (digit) => {
        if (this.state.numA != null) {
            this.setState({numA: digit})
            return
        }
        this.setState({displayValue:digit})
    }


    render() {

        return (
            <div className="calculator">
                    <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.clearMemory}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="+" operation click={this.setOperation}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" />
                <Button label="2" />
                <Button label="1" />
                <Button label="." />
                <Button label="=" operation click={this.setOperation}/>
                <Button label="0" double/>
                
               
               
               
              
                


            </div>
        )
    }
}
export default Calculator