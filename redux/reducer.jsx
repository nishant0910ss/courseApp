import ADD_TO_CART from './constant';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
}

export default reducer;
