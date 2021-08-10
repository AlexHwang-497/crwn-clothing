// *because we need to store data on our page, we will make this a class page
import React from 'react'
// *importing our data
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview'

// import CollectionPreview from '../../components/collection-preview/collection-preview';


class ShopPage extends React.Component{
    constructor(props){
        // *we need acces to our state,  so let's do a super prps
        super(props)
        this.state = {
            // *we are passing in the data from shop.data.js
            collections: SHOP_DATA
        }
    }
    // *inside here now we will ant to render out our acutal previews
    // * we will map over our collecitons w/ collections
        // *and we will render out a collection preview where the key is the collection ID from shop.data.js
        render() {
            const { collections } = this.state;
            return (
              <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
              </div>
            );
          }
}

export default ShopPage