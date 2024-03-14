import Point from "../model/point";

// create points
export const newPoint = async(req, res) => {

    try{
        const {customerName, phone, cylinderSize,cylinderType } = req.body;
        
    

        let phoneNumber = await Point.findOne({phone})

        if(phoneNumber){
            await Point.findOneAndUpdate(
                { phone },
                { $inc: { points: 2000}}
            )
        
        } else{
            await Point.create({
                customerName,
                phone,
                cylinderSize,
                cylinderType,

            })
        }

        return res.status(201).json({
            success: true,
            // point
        })

    } catch(error){
        console.log(error);
    }

}