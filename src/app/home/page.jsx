'use client'
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import Services from '../../components/layouts/Services'
import Cardslide from "../../components/gas/Cardslide";



const Home = () => {
 
  

    return (
        <div className="py-5">
          <Cardslide />
            <Services />
        </div>
    )
}

export default Home;