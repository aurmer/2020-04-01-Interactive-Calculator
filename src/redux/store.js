import { createStore } from 'redux'

const initialState = {
  currentEntry: "0",
  storedEntry: "",
  clickedOperatorLast: false,
  clickedEnterLast: false,
  storedOperator: ""
}

export const deepCopy = (oldObject) => {
  return JSON.parse(JSON.stringify(oldObject))
}

function reducer (state = initialState, action) {
  let newState = deepCopy(state)

  switch (action.type) {
    case "CLICKED_NUMBER": {
      const btnValue = action.payload.buttonId
      const currentHasNoDot = newState.currentEntry.indexOf('.') === -1

      //if an operator was just pushed, we will clear the output on new entry
      if(newState.clickedOperatorLast) {
        newState.currentEntry = "0"
      }

      //if enter was clicked last, and we start a new number, toss stored one
      if(newState.clickedEnterLast) {
        newState.storedEntry = ""
      }

      if(currentHasNoDot || btnValue !== '.') {
        newState.currentEntry = (newState.currentEntry + action.payload.buttonId).replace(/^0([^\.])/,"$1")  //if there is a leading zero before anything other than a period, remove it
                                                                                 .replace(/^00/,"0") //if there are two leading zeros, remove one
      }

      newState.clickedOperatorLast = false
      newState.clickedEnterLast = false

      break
    }
    case "CLICKED_OPERATOR": {
      const operator = action.payload.buttonId

      if(newState.clickedOperatorLast) {
        newState.storedOperator = operator
      }
      //this is the first number entered. store it with operator
      else if(newState.storedEntry === ""){
        newState.storedEntry = newState.currentEntry
        newState.storedOperator = operator
        newState.clickedOperatorLast = true
      }
      //2 numbers are entered with operator. do last operation, return, and keep going
      else {
        newState.currentEntry = `${eval(newState.storedEntry + newState.storedOperator + newState.currentEntry)}`
        newState.storedEntry = newState.currentEntry
        newState.storedOperator = operator
        newState.clickedOperatorLast = true
      }

      newState.clickedEnterLast = false

      break
    }
    case "CLICKED_CLEAR": {
      newState = initialState
      break
    }
    case "CLICKED_SUBMIT": {
      newState.currentEntry = `${eval(newState.storedEntry + newState.storedOperator + newState.currentEntry)}`
      newState.clickedOperatorLast = true
      newState.storedEntry = newState.currentEntry
      newState.storedOperator = ""
      newState.clickedEnterLast = true

      break
    }
    default: {

    }
  }
  console.dir(newState)
  return newState
}

export default createStore(reducer)
