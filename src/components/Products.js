import React, { useEffect, useState } from 'react'
import {useSwiper} from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './components.css'
import Card from './Card'
import {sliderSetting} from './common'
const Products = () => {
    const [detail, setDetail] = useState([]);
  
    let URL = 'https://fakestoreapi.com/products';
  
    const fetchAPI = async (URL) => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setDetail(data);
      } catch (err) {
        console.log("Error");
      }
    }
  
    useEffect(() => {
      fetchAPI(URL);
    }, []);

  
    return (
      <section className='sec12' style={{width:"1400px"}}>
        <Swiper {...sliderSetting}>
          {detail.map((card, i) => (
            <SwiperSlide key={i}>
              <div className='res'>
                <Card details={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  
  export default Products;