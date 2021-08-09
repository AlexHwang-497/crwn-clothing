import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    // *we want to hide our webstie when they first come 
    hidden: true,
    // *we need to add or clear items into the cart
    // * we will add items everytime the user clicks
    cartItems:[]
  };

  const cartReducer = (state = INITIAL_STATE, action) => {
      switch(action.type){
        //   *we need to turn this into an action.type
          case 'TOGGLE_CART_HIDDEN': 
          return {
              ...state,
            //   * we are saying whatever this boolean value is here, we want the opposite
              hidden: !state.hidden
          }
          case CartActionTypes.ADD_ITEM:
            // *we want to return an object w/ all of the state right as it is and spread it through
            return {
              ...state,
              // *this will aloow our cart items array to be our old car items and then w/ the newest action got fired right.
              cartItems:[...state.cartItems,action.payload]
            }
          default:
              return state;
      }
  } 

  export default cartReducer;