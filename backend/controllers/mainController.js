import Branch from '../model/branch';


// Create branch
export const newBranch = async(req, res, next) => {
    const branch = await Branch.create(req.body);
    return res.status(201).json({
        branch,
    });
};

// Get all branches
export const getBranches = async(req, res) => {

    const branch  = await Branch.find()
        if(!branch){
            return res.status(401).json({
                message: "Branch not found"
            })
        }
        return res.status(201).json({
            branch
        })
}








