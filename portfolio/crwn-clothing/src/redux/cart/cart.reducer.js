import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    // *we want to hide our webstie when they first come 
    hidden: true
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
          default:
              return state;
      }
  } 

  export default cartReducer;