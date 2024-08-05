'use client'
import React from "react";

import Cardslide from "../../components/gas/Cardslide";
import Cylinder12kgs from "../../components/gas/12kgasClyinder"
import Gascooker from "../../components/gas/gascooker"
// import HomeSlide from "../../components/layouts/homeSlide"
const Home = () => {

    return (
        <div className="py-10">
           <br/>  <br/>  <br/>  <br/>  <br/>
          {/* <HomeSlide /> */}
         
          <Cardslide />
          <br/>  <br/>  <br/>
          <Cylinder12kgs/>
          <Gascooker />
          
        </div>
    )
}
export default Home;