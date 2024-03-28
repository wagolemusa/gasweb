
import Gas from '../model/gas'


// Save gas 
export const newGas = async(req, res) => {
    try{

        let gassave = new Gas ({
            ...req.body

        })
        await gassave.save()

    }catch(error){
        console.log(error)
    }
}




