// *because we need to store data on our page, we will make this a class page
// *vid 145; ShopPage is becoming a simple non-connected component now.   we wwill now have the cild component of the shoppage be connected
import React from 'react'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


const ShopPage =({collections}) => (
  <div className='shop-page'>
    <CollectionsOverview/>
  </div>
)



export default ShopPage