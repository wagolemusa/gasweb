import React from 'react'
import axios from 'axios';
import Cardslide from "../../components/layouts/Cardslide";


const getGass = async () => {    
    const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/gas`);
    return data;
}

const Allgass =  async() => {

    const productsData = await getGass();
    return <Cardslide data={productsData} />
    
}

export default Allgass;
