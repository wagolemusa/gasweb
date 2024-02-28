import Customer from "../model/customer";

// create customer
export const newCustomer = async(req, res) => {
    const customer = await Customer.create(req.body)
    return res.status(201).json({
        customer
    })
}

