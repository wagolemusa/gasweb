'use client'
import React from "react";

import Cardslide from "../../components/gas/Cardslide";
import SwiperComponent from "../../components/layouts/swiper"
// import HomeSlide from "../../components/layouts/homeSlide"
const Home = () => {

    return (
        <div className="py-10">
           <br/>  <br/>  <br/>  <br/>  <br/>
          {/* <HomeSlide /> */}
         
          <Cardslide />
          <br/>  <br/>  <br/>
          <SwiperComponent />
          
        </div>
    )
}
export default Home;