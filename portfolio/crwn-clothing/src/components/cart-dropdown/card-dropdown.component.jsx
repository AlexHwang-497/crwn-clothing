import React from 'react';
// *we import the custom button because we need it at the very end
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;