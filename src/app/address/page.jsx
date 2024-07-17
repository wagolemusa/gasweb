import React from 'react'
import axios from 'axios';
import UserAddresses from "../../components/user/UserAddresses"


const getGass = async () => {    
    const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/address`);
    return data;
}

const Allgass =  async() => {

    const getAddressData = await getGass();
    return <UserAddresses data={getAddressData} />
    
}

export default Allgass;
