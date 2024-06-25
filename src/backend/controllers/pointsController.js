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


// query points Data
export const getPointData = async(req, res) => {
    const point = await Point.find();
    return res.status(201).json({
        point
    })
}


// get customers
export const getPointById = async(req, res) =>{
    const point = await Point.findById(req.query.id);
    if(!point){
        return res.status(401).json({
            message: "point not fund"
        })
    }
    return res.status(201).json({
        point
    })
}


// Delete Company data
export const deletePoint = async(req, res, next) => {
    let point = await Point.findById(req.query.id);

    if(!point){
        res.status(404).json({
            error: "point not found"
        })
    }  

    await point.deleteOne();
    res.status(200).json({
        success: true,
    })
};