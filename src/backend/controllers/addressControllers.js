
import next from "next";
import Address from "../model/address";
import ErrorHandler from "../utils/errorHandler";


export const getAddresses = async (req, res) => {
  try {
    // Ensure user is authenticated and req.user._id is available
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Find addresses associated with the authenticated user
    const addresses = await Address.find({ user: req.user._id })
                                  .populate('user') // Populate the user field if needed
                                  .exec(); // Execute the query

    // Return the addresses
    res.status(200).json({ addresses });
  } catch (err) {
    console.error('Error fetching addresses:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const newAddress = async (req, res) => {
  try {
    const addressData = {
      ...req.body,
      // user: req.user._id,
    };
    const address = await Address.create(addressData);
    res.status(201).json({ address });
  } catch (err) {
    res.status(500).json({ error: 'Error creating address' });
  }
};



export const getAddress = async (req, res) => {
  const address = await Address.findById(req.query.id)
  if (!address) {
    return next(new ErrorHandler('Address not found', 404))
  }
  res.status(200).json({
    address
  })
}


// update 
export const updateAddress = async (req, res) => {

  let address = await Address.findById(req.query.id)

  if (!address) {
    return next(ErrorHandler('Address not found'))
  }
  address = await Address.findByIdAndUpdate(req.query.id, req.body)

  res.status(200).json({
    address
  });

}

// delete
export const deleteAddress = async (req, res) => {

  let address = await Address.findById(req.query.id)

  if (!address) {
    return next(ErrorHandler('Address not found'))
  }
  await address.remove();

  res.status(200).json({
    success: true,
  });

}