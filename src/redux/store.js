import { createStore } from 'redux'

const initialState = {

}

export const deepCopy = (oldObject) => {
  return JSON.parse(JSON.stringify(oldObject))
}

function reducer (state = initialState, action) {
  let newState = deepCopy(state)

  switch (action.type) {
    case "TYPE": {
      
    }
    default: {

    }
  }

  return newState
}

export default createStore(reducer)
