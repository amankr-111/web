import React from 'react'
import './Navbar.css';
import Truck from '../../images/Vector.png'
import Facebook from '../../images/facebook.png'
import LinkedIn from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'
import Twitter from '../../images/twitter.png'


const Navbar = () => {
  return (
    <div className='complete'>
      <div className="left3">
        <span><img src={Truck} alt="" /></span>
        <span className='delivery'><p>Free Delivery</p></span>
        <span className='delivery1'>|</span>
        <span>Return Policy</span>
      </div>
      <div className="right3">
        <img src={Facebook}/>
        <img src={LinkedIn}/>
        <img src={Instagram}/>
        <img src={Twitter}/>
      </div>
      
    </div>
  )
}

export default Navbar
