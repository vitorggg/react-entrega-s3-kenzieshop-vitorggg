// estado iniical arr vazio
// receber as actionstypes
// switchcase
import { ADD_CART } from "./actionsType";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { prod } = action;
      return [...state, prod];

    default:
      return state;
  }
};

export default cartReducer;
