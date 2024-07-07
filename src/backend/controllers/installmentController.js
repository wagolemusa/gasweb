import Installment from "../model/installment";

// create installment
export const newInstallment = async(req, res) => {
        try{

        let installment  = new Installment({
            ...req.body
        })

        await installment.save()
        return res.status(201).json({
            installment
        });
    }catch(error){
        console.log(error)
    }    
};

// update installment Data 
export const secandeInstallment = async(req, res) => {
    try{
        const {customerName, amount, installmentPaid } = req.body;

        let intialAmountPaid = await Installment.findOne({installmentPaid})

        let intialAmount = await Installment.findOne({amount})

        let paid = Number(intialAmountPaid + installmentPaid)

        let balance = Number(intialAmount - paid)

        let installmentPay = new Installment({
            customerName,
            amount,
            installmentPaid,
            balance
        })
        await installmentPay.save();
        return res.status(201).json({
            success: true,
            message: "Installment Saved"
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "No Data Saved"
        });
    }

}


// query points Data
export const getInstallment = async(req, res) => {
    const installment = await Installment.find();
    return res.status(201).json({
        installment
    })
}


// get customers
export const getinstallmentById = async(req, res) =>{
    const installment = await Installment.findById(req.query.id);
    if(!installment){
        return res.status(401).json({
            message: "point not fund"
        })
    }
    return res.status(201).json({
        installment
    })
}


// update installment if Complate payment or not
export const updateinstall = async(req, res, next) => {
    let installment = await Installment.findById(req.query.id);

    if(!installment){
        res.status(404).json({
            error: "Data not found"
        })
    }
    installment = await Installment.findByIdAndUpdate(req.query.id, req.body)
    res.status(200).json({
        installment,
    })
};