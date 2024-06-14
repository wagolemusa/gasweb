import Sell from '../model/sell';

// create sell gas
export const newSell = async(req, res) => {
    const sell_gas = await Sell.create(req.body);
    res.status(201).json({
        sell_gas
    })
}



