import Accessories from "../model/accessories";

// create accessories
export const newAccessory = async(req, res) => {

    try{

        let accessories  = new Accessories({
            ...req.body
        })

        console.log("aaaaaa", accessories)

        await accessories.save()


        return res.status(201).json({
            accessories
        });
    }catch(error){
        console.log(error)
    }    
};




