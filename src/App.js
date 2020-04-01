import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import {
  clickNumber,
  clickOp,
  clickClear,
  clickSubmit
} from './redux/actions'

function fireAction(props,id) {
  const isNumerical = !Number.isNaN(parseInt(id)) || id === "."
  const isOperator = id === "+" || id === "-" || id === "*" || id === "/"
  const isClear = id === "C"
  const isSubmit = id === "="

  if(isNumerical) {
    props.clickNumber(id)
  }
  else if(isOperator) {
    props.clickOp(id)
  }
  else if(isClear) {
    props.clickClear()
  }
  else if(isSubmit) {
    props.clickSubmit()
  }
}

function App(props) {
  return (
    <>
      <div className="app-container">
        <div className="calculator" onClick={(evt)=>fireAction(props,evt.target.id)}>
          <Button id="0" key="0" style={{gridArea:"button0"}}>0</Button>
          <Button id="1" key="1" style={{gridArea:"button1"}}>1</Button>
          <Button id="2" key="2" style={{gridArea:"button2"}}>2</Button>
          <Button id="3" key="3" style={{gridArea:"button3"}}>3</Button>
          <Button id="4" key="4" style={{gridArea:"button4"}}>4</Button>
          <Button id="5" key="5" style={{gridArea:"button5"}}>5</Button>
          <Button id="6" key="6" style={{gridArea:"button6"}}>6</Button>
          <Button id="7" key="7" style={{gridArea:"button7"}}>7</Button>
          <Button id="8" key="8" style={{gridArea:"button8"}}>8</Button>
          <Button id="9" key="9" style={{gridArea:"button9"}}>9</Button>
          <Button id="+" key="+" style={{gridArea:"buttonAdd"}}>+</Button>
          <Button id="-" key="-" style={{gridArea:"buttonSub"}}>-</Button>
          <Button id="/" key="/" style={{gridArea:"buttonDiv"}}>/</Button>
          <Button id="*" key="*" style={{gridArea:"buttonMlt"}}>*</Button>
          <Button id="C" key="C" style={{gridArea:"buttonClr"}}>C</Button>
          <Button id="." key="." style={{gridArea:"buttonDot"}}>.</Button>
          <Button id="=" key="=" style={{gridArea:"buttonEql"}}>=</Button>
          <div className="output" style={{gridArea:"output"} }>{props.currentDisplay}</div>
        </div>
      </div>
    </>
  )
}


function mapStateToProps(state) {
  return {
    currentDisplay: state.currentEntry,
  }
}


export default connect(
  mapStateToProps,
  {
    clickNumber,
    clickOp,
    clickClear,
    clickSubmit
  }
)(App)
