'use client'
import React, { useEffect, useState, Suspense, useRef, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CartContext from "../../context/CartContext";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Cylinder12kgs = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {

  };

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get('http://localhost:3000/api/gas/12kgs');
              setData(response.data);
          } catch (error) {
              setError('Failed to fetch Data');
              console.error('Error fetching data', error)
          }
      }
      fetchData()
  }, [])
 
  const { addItemToCart } = useContext(CartContext)

    // Add to cart function
    const addToCartHandler = () => {
      addItemToCart({
        gas: data?.get12kgs?._id,
        productName: data?.get12kgs.productName,
        price: data?.get12kgs?.price,
        // image: data?.get12kgs?.images[0].url,
        cylinderSize: data?.get12kgs?.cylinderSize
      })
    }

  return(

    <Suspense>
      <div className="container-fluid">

      <div className='rightbtn'>
            <a href='/' className='title-border'>12kgs, 13kgs, 12.5kgs Refill</a>
        
            <a href='/' className='btnall'>See All</a>
        </div>

        <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
            }}
          >
            { data?.get12kgs?.map((gas6kg) =>(
            <SwiperSlide>
              {/* <div className="slide12 max-w-sm rounded overflow-hidden shadow-lg w-48"> */}
              <div className="product-card12">
              <button className="btnStep1" onClick={addToCartHandler} >Add To Cart</button>
                <Image
                  src={
                    gas6kg?.images[0]
                      ? gas6kg?.images[0].url
                      : "/images/default_product.png"
                  }
                  alt="product anme"
                  height="240"
                  width="240"
                />
                  
                  <div className="font-bold text-xl py-3">{gas6kg?.productName} &nbsp;  {gas6kg?.cylinderSize}</div>
                  
                  <div class="pt-2 pb-10">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  line-through">UGX {gas6kg?.price}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  ">{gas6kg?.category}</span>
                  </div>
                </div>
                <div className="cylinder6kgs">
                  <div className="cyrefill">UGX  {gas6kg?.discount}</div>
                </div>
              

                </SwiperSlide>
              ))}
              
               {/* <div className="autoplay-progress" slot="container-end"> */}
                {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg> */}
                {/* <span ref={progressContent}></span> */}
              {/* </div> */}
        </Swiper>
        </div>
    </Suspense>

  )
}


export default Cylinder12kgs










