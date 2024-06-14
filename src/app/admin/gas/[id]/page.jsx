import React from 'react'
import axios from 'axios';
import UpdateGasData from '../../../../components/admin/gaspost/updateGass';


const getGasDataById = async (id) => {
    const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/gas/${id}`);
    return data;
}

const updateGasDatils =  async({ params }) => {

    const data = await getGasDataById(params.id);
    
    return <UpdateGasData data={data.getGas} />                     
} 

export default updateGasDatils;

