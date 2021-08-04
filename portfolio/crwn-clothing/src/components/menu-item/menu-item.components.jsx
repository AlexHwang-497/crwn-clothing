import React from 'react'
import './menu-item.styles.scss'

// * four our menu item we are goin to use a functional componet because we don't really need our compnoent 
    // * to hold any state
// *div style, this allows us to post the images from directory in the background, size
const MenuItem = ({title,imageUrl,size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
        // *this affects the size of our menu item
    }} className={`${size} menu-item`}
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem