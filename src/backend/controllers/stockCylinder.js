import CylinderStock from "../model/cylinderStock";

export const newStockCylinder = async(req, res, next) => {
    try{
        // const { brand, date, distributor, cyliders, finaltotal} = req.body
        let gas  = new CylinderStock({
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