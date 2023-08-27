import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='list'>
     <nav class="navbar">
        <ul class="nav-list">
            <li style={{width:'71px',height:'28px',fontSize:'18px',lineHeight:'21.11px',fontWeight:'400'}}><a href="#">HOME</a></li>
            <li style={{width:'70px',height:'28px',fontSize:'18px',lineHeight:'21.11px',fontWeight:'400'}}><a href="#">ABOUT</a></li>
            <li class="dropdown" style={{width:'159px',height:'28px',fontWeight:'500',fontSize:'18px',lineHeight:'21.11px'}}>
                <a href="#"><u>OUR PRODUCTS</u> </a>
                <ul class="dropdown-content" style={{border:"1px solid black"}}>
                    <li style={{width:'129px',height:'28px',fontWeight:'300',fontSize:'14px',lineHeight:'16.42px'}}><a href="#">PRODUCTS 1</a></li>
                    <li style={{width:'129px',height:'28px',fontWeight:'300',fontSize:'14px',lineHeight:'16.42px'}}><a href="#">PRODUCTS 2</a></li>
                    <li style={{width:'129px',height:'28px',fontWeight:'300',fontSize:'14px',lineHeight:'16.42px'}}><a href="#">PRODUCTS 3</a></li>
                    <li style={{width:'129px',height:'28px',fontWeight:'300',fontSize:'14px',lineHeight:'16.42px'}}><a href="#">PRODUCTS 4</a></li>
                </ul>
            </li>
            
            <li><a href="#">CONTACT US</a></li>
        </ul>
    </nav>

      
    </div>
  )
}

export default Home
