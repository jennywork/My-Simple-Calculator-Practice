import React from 'react';
import './index.css';


class Calculate extends React.Component {
  state = {
    value: null,
    displayValue: 0
  }

  clearAll = () => {
    this.setState({
      value: null,
      displayValue: 0
    })
  }

  inputDigit = (num) => {
    const {displayValue} = this.state
    this.setState({
      displayValue: displayValue === 0 ? num : displayValue + num
    })
  }
  

  calculate = (operator) => {
    const { value, displayValue } = this.state
    const inputValue = displayValue
    if (value == null) {
      this.setState({
        value: inputValue
      })
    } 
    else if(operator === '+') {
      const currentValue = value
      
      this.setState({
        value: inputValue,
        displayValue: inputValue + value
      })
      console.log(displayValue)
    }
  }

  render() {
    return(
      <div id="calculate">
        <div className="calculate-box">{this.state.displayValue}</div>
        <div className="buttons">
          <div className="numbers">
            <button name="1" onClick={(e) => this.inputDigit(e.target.name)}>1</button>
            <button name="2" onClick={(e) => this.inputDigit(e.target.name)}>2</button>
            <button name="3" onClick={(e) => this.inputDigit(e.target.name)}>3</button>
            <button name="4" onClick={(e) => this.inputDigit(e.target.name)}>4</button>
            <button name="5" onClick={(e) => this.inputDigit(e.target.name)}>5</button>
            <button name="6" onClick={(e) => this.inputDigit(e.target.name)}>6</button>
            <button name="7" onClick={(e) => this.inputDigit(e.target.name)}>7</button>
            <button name="8" onClick={(e) => this.inputDigit(e.target.name)}>8</button>
            <button name="9" onClick={(e) => this.inputDigit(e.target.name)}>9</button>
            <button name="0" onClick={(e) => this.inputDigit(e.target.name)}>0</button>
            <button onClick={(e) => this.clearAll()}>C</button>
            <button name="=" onClick={(e) => this.calculate(e.target.name)}>=</button>
          </div>
          <div class="mathOption">
            <button name="+" onClick={(e) => this.calculate(e.target.name)}>+</button>
            <button name="-" onClick={(e) => this.calculate(e.target.name)}>-</button>
            <button name="*" onClick={(e) => this.calculate(e.target.name)}>x</button>
            <button name="/" onClick={(e) => this.calculate(e.target.name)}>÷</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Calculate;
