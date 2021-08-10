// *because we need to store data on our page, we will make this a class page
import React from 'react'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';





const ShopPage =({collections}) => (
  <div className='shop-page'>
    <CollectionsOverview/>

  </div>
)




export default ShopPage