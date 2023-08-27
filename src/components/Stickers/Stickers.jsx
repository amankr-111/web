import React from 'react'
import './Sticker.css'
import year from '../../images/2022.png'
import look from '../../images/LOOK.png'
import girl from '../../images/jessica.png'
import diamond from '../../images/Star 3.png'
import downline from '../../images/Line 23.png'
import linestar from '../../images/Star 4.png'
import seemore from '../../images/see more.png'
import rectangle from '../../images/Rectangle 29.png'
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Poppins:wght@300&family=Syne:wght@800&display=swap" rel="stylesheet"></link>




const Stickers = () => {
  return (
    <div className="red">
    <div className='op'>
      <span>FRESH</span>
      <span><img src={year} alt="" /></span>
      <span><img src={look} alt="" /></span>
      <span><img src={downline} alt="" /></span>
      
     
      
      
    </div>
    <div className="po">
      <img src={girl} alt="" className='upar' />
      <img src={diamond} alt=""  className='down'/>
      <img src={linestar} alt="" className='middle' />
      <img src={rectangle} alt="" className='orange'/>  
    </div>
    </div>
  )
}

export default Stickers
