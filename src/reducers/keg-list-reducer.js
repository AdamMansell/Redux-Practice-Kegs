export default (state = {}, action) => {
  const { name, brand, price, content, pintsLeft, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        content: content,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  default:
    return state;
  }
};