import React from 'react'

class Calculate extends React.Component {
  state = {
    displayValue: '0', //- string
    calculateValue: 0, //- number
    operator: null,
    prevValue: null,
    isResult: false
  }

  clearAll = () => {
    this.setState({
      displayValue: '0', //- string
      calculateValue: 0, //- number
      operator: null,
      prevValue: null,
      isResult: false
    })
  }

  inputDigit = (digit) => {
    let newDisplayValue, newCalculateValue
    if (this.state.isResult === false) {
      newDisplayValue = (this.state.displayValue === "0") ? (digit) : (this.state.displayValue + digit)
      newCalculateValue = Number(this.state.calculateValue) * 10 + Number(digit)
    } else {
      this.clearAll();
      newDisplayValue = digit
      newCalculateValue = Number(digit)
    }
    this.setState({
      displayValue: newDisplayValue,
      calculateValue: newCalculateValue
    })
  }

  calculateOperator = (type, prevValue, nextValue) => {
    if (type === "+") {
      return prevValue + nextValue
    } else if (type === "-") {
      return prevValue - nextValue
    } else if (type === "*") {
      return prevValue * nextValue
    } else if (type === "/") {
      return prevValue / nextValue
    }
  }

  calculate = (operator) => {
    if (operator === "=") {
      if (this.state.operator === "/" && this.state.calculateValue === 0) {
        this.setState({
          displayValue: '賣鬧啊!國小重讀吧~',
          calculateValue: 0,
          operator: null,
          prevValue: null,
          isResult: true
        })
      } else {
        let result;
        if (this.state.operator != null) {
          if (this.state.calculateValue == null) {
            result = this.calculateOperator(this.state.operator, this.state.prevValue, this.state.prevValue)
          } else {
            result = this.calculateOperator(this.state.operator, this.state.prevValue, this.state.calculateValue)
          }
          this.setState({
            displayValue: result,
            calculateValue: 0,
            operator: null,
            prevValue: null,
            isResult: true
          })
        }
      }
    } else {
      if (this.state.operator === null) {
        const newDisplayValue = this.state.displayValue + operator
        const newPrevValue = this.state.calculateValue
        this.setState({
          displayValue: newDisplayValue,
          calculateValue: 0,
          operator: operator,
          prevValue: newPrevValue
        })
      } else {
        const resultTemp = this.calculateOperator(this.state.operator, this.state.prevValue, this.state.calculateValue)
        const newPrevValue = resultTemp
        const newDisplayValue = newPrevValue + operator
        this.setState({
          displayValue: newDisplayValue,
          calculateValue: 0,
          operator: operator,
          prevValue: newPrevValue
        })
      }
    }
  }

  render() {
    return (
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

export default Calculate