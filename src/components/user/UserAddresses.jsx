
'use client'
import Link from "next/link";
import React, { useState, useEffect} from "react";
import axios from "axios";

const UserAddresses = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get('https://giggas-30bcd3403c62.herokuappdds.com/api/address');
              setData(response.data);
          } catch (error) {
              setError('Failed to fetch Data');
              console.error('Error fetching data', error)
          }
      }
      fetchData()
  }, [])

  
  return  data?.address?.map((address) => (
    <Suspense>
    <Link href={`/address/`}>
      <div className="mb-5 gap-4">
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
          <div className="mr-3">
            <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow mt-2">
              <i className="fa fa-map-marker-alt"></i>
            </span>
          </div>
          <figcaption className="text-gray-600">
            <p>
              {address.street} <br /> {address.city}, {address.state}, {" "}
              {address.zipCode}, {address.country}
              <br />
              Phone no: {address.phoneNo}
            </p>
          </figcaption>
        </figure>
      </div>
    </Link>
    </Suspense>
  ))
};

export default UserAddresses;