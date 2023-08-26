import React from 'react'
import './top.css'
import Beautiful from './Beautiful/Beautiful';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Seemore from './Seemore/Seemore';
import Stickers from './Stickers/Stickers';
import Text from './Text/Text';

const Top = () => {
  return (
    <div className="newApp">
      <Navbar/>
      <Text/> 
      <Beautiful/>
      <Home/>
      <Stickers/>
      <Seemore/>
      hi
    </div>
  )
}

export default Top