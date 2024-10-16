import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, expedita et eius quisquam totam ipsum neque pariatur iure laudantium atque corrupti in dolorum doloribus molestiae nemo sequi itaque nam ab.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero mollitia accusantium maiores ex necessitatibus reprehenderit reiciendis minima itaque rerum. Dolore nemo a dolorem explicabo accusantium doloremque eos suscipit in porro!</p>
        </div>
    </div>
  )
}

export default DescriptionBox