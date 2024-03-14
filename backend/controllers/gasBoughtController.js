// import Gasbought from "../model/gasbought";

import Gasbought from '../model/gasbought'

export const newGassBought = async(req, res, next) => {

    try{

        // const { brand, date, distributor, cyliders, finaltotal} = req.body
        let gas  = new Gasbought({
            ...req.body
        })

        console.log("gass", gas)

        await gas.save()


        return res.status(201).json({
            gas
        });
    }catch(error){
        console.log(error)
    }    
};








