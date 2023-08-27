import React, { useState } from 'react'
import Products from './Products'
import { useSwiper } from 'swiper/react'
import './components.css'
const Middle = () => {

  const [click ,setClick]= useState('')

  const swiper= useSwiper()
  return (
    <div className='container mentain'>
    <div className='box uni'>
    <div className='middleHeading'>
         <h2 className='new_product'>New Products</h2>      
     </div>
 <div className='arr'>
 <svg style={{cursor:"pointer"}} onClick={()=>{setClick(1)}} width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615"/>
 </svg>
     <svg style={{cursor:"pointer"}} oonClick={()=>{setClick(2)}} width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615"/>
 </svg>
 </div>
    </div>
 
   <div>
     <svg className='overlay-svg' width="659" height="22" viewBox="0 0 659 22" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="11" y1="10.5" x2="659" y2="10.4999" stroke="#161615"/>
 <path d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="black"/>
 </svg>
 </div> 
     <div className='bellow'>
       <div className='right'>
         <span>Apparel</span>
         <span className='acc'>Accessories</span>
         <span>Best sellers</span>
         <span>50% off</span>
       </div>
       <div className='left'>
        <Products  />
       </div>
     </div>
    <span className='arr1' >
      <svg style={{cursor:"pointer",marginLeft: '56px'}} onClick={()=>{setClick(1)}} width="156" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615"/>
      </svg>
          <svg style={{cursor:"pointer"}} oonClick={()=>{setClick(2)}} width="156" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615"/>
      </svg>
    </span>
     </div>
  )
}

export default Middle