import Branch from '../model/branch';


// Create branch
export const newBranch = async(req, res, next) => {
    const branch = await Branch.create(req.body);
    return res.status(201).json({
        branch,
    });
};




