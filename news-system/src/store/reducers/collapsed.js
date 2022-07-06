export const collapsedReducer = (state = false, action) => {
  const { type } = action
  switch (type){
    case 'collapsed':
      state = !state
      return state
    default:
      return state
  }
}
