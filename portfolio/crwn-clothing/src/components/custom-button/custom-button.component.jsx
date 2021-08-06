import React from 'react';

import './custom-buttom.styles.scss';
// *we will first pull the children off our pros that get passed into our custom button 
    // *we will destructure all the other props int this otherProps and spread into our custom button
    // *we put children inside our button tag

    const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
      <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    );
    
export default CustomButton;