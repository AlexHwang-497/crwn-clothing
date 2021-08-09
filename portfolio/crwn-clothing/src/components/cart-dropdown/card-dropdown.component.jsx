import React from 'react';
import {connect} from 'react-redux'
// *we import the custom button because we need it at the very end
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

// ! discuss with carlos in regard to visualizing the destructuring of the data
// * we are also reusing components for the cartItems.map
const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem=> (
        
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// *we are dstructing cart off of state
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);