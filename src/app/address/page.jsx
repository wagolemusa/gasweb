import React from 'react'
import axios from 'axios';
import UserAddresses from "../../components/user/UserAddresses"


const getaddres = async () => {    
    const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/address`);
    return data;
}

const Addresdata =  async() => {

    const getAddressData = await getaddres();
    return <UserAddresses data={getAddressData} />
    
}

export default Addresdata;
