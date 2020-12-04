export default function selectedKeg(state = null, action) {
  switch (action.type) {
    case "SET_SELECTED_KEG":
      return action.payload;      // action.payload will return the current state
    default:
      return state;
  }
}