import Company from '../model/company';

// Create Company
export const newCompany = async(req, res) => {
    const company = await Company.create(req.body);
    return res.status(201).json({
        company
    })
}
