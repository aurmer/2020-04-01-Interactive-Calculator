
export const clickNumber = (id) => ({
  type: "CLICKED_NUMBER",
  payload: {buttonId: id}
})

export const clickOp = (id) => ({
  type: "CLICKED_OPERATOR",
  payload: {buttonId: id}
})

export const clickClear = () => ({
  type: "CLICKED_CLEAR",
  payload: {}
})

export const clickSubmit = () => ({
  type: "CLICKED_SUBMIT",
  payload: {}
})
