import React from 'react'
import './Partners.css'
import gallery_1 from '../../assets/pexels-pixabay-269077.jpg'
import gallery_2 from '../../assets/pexels-paul-loh-65233-233698.jpg'
import gallery_3 from '../../assets/pexels-thatguycraig000-2449452.jpg'
import gallery_4 from '../../assets/pexels-lucianphotography-3566226.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Partners = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow } alt="" /> </button>
    </div>
  )
}

export default Partners;