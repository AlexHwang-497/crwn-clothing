import React from 'react'

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss'
// todo:A <span> element which is used to color a part of a text:
    // todo: example; <p>My mother has <span style="color:blue">blue</span> eyes.</p>
// ! how are we able to pull the collections data?
    const CollectionItem = ({ id, name, price, imageUrl }) => (
        <div className='collection-item'>
          <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
          />
          <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
          </div>
          <CustomButton inverted >Add to Cart</CustomButton>
        </div>
      );

export default CollectionItem