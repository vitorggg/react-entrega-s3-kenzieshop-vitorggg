// estado iniical arr vazio
// receber as actionstypes
// switchcase
import { ADD_CART, SUB_CART } from "./actionsType";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { prod } = action;
      return [...state, prod];

    case SUB_CART:
      const { item } = action;
      const newArr = state.filter((prod) => prod !== item);
      return (state = newArr);

    default:
      return state;
  }
};

export default cartReducer;
