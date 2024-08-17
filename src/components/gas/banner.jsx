'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useEffect, useState, Suspense, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import CartContext from "../../context/CartContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/products/banner');
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch Data');
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, []);

  const { addItemToCart } = useContext(CartContext);

  // Add to cart function
  const addToCartHandler = (product) => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    });
  };

  return (
    <Suspense>
      <div className="gasscooker">
        <div className="container-fluid">
          <div className='rightbtn'>
            <a href='/' className='title-border'>Banners & Regulator</a>
            <a href='/' className='btnall'>See All</a>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            grid={{ rows: 2 }}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
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
            <div className="row">
              {data?.gasBanner?.map((gas6kg) => (
                <SwiperSlide key={gas6kg._id}>
                  <div className="col-md">
                    <div className="product-card">
                      <button className="btnStep1" onClick={() => addToCartHandler(gas6kg)}>Add To Cart</button>
                      <Image
                        src={
                          gas6kg?.images[0]
                            ? gas6kg?.images[0].url
                            : "/images/default_product.png"
                        }
                        alt={gas6kg.name}
                        height="240"
                        width="240"
                      />
                      <div className='font-bold'>{gas6kg.category}</div>
                      <div className="font-bold text-xl py-3">{gas6kg?.name}</div>
                    </div>
                  </div>
                  <div className="cylinder6kgs">
                    <div className="cyrefill">UGX {gas6kg?.price}</div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </Suspense>
  );
};

export default Banner;
