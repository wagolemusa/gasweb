// import axios from "axios";
// import React from "react"

// import { cookies } from "next/headers";
// import Shipping from "../../components/cart/Shipping";

// const getAddresses = async () => {

//     const nextCookies = cookies();

//   const nextAuthSessionToken = nextCookies.get("next-auth.session-token");
  
//     const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/address`, {
//         headers: {
//             Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
//           },
//     });

//     return data?.addresses
// }


// const ShippingPage = async () => {
//     const addresses = await getAddresses()

//     return <Shipping addresses={addresses} />;
// }

// export default ShippingPage;


import axios from "axios";
import React from "react";
import { cookies } from "next/headers";
import Shipping from "../../components/cart/Shipping";

const getAddresses = async () => {
  try {
    const nextCookies = cookies();
    const nextAuthSessionToken = nextCookies.get("next-auth.session-token")?.value;
    
    if (!nextAuthSessionToken) {
      throw new Error("Session token is missing");
    }
    
    const apiUrl = `${process.env.ENVIRONMENT_URL}/api/address`;
    const response = await axios.get(apiUrl, {
      headers: {
        Cookie: `next-auth.session-token=${nextAuthSessionToken}`,
      },
    });

    return response.data?.addresses;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return [];
  }
};

const ShippingPage = async () => {
  const addresses = await getAddresses();

  return <Shipping addresses={addresses} />;
};

export default ShippingPage;
