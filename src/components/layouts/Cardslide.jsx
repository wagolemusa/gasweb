'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


const Cardslide = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get("http://localhost:3000/api/gas");
              setData(response.data);
          } catch (error) {
              setError('Failed to fetch Data');
              console.error('Error fetching data', error)
          }
      }
      fetchData()
  }, [])

  console.log("bbb", data)

  return(

    <div>
      <div className='container'>
        <div className='row'>
       
          { data?.get6kgs?.map((gas6kg) =>(

            <div className='col-md-4'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{gas6kg?.seton}</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
            </div>

          ))}

          </div>

      </div>
    </div>
  )
}


export default Cardslide










