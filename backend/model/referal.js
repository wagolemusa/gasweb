import mongoose from "mongoose";

const referralSchema = mongoose.Schema({

     referralName: {
        type: String,
        required: true
     },
     points: {
        type: Number, 
        required: true
     },

    
})

export default mongoose.models.Referrals || mongoose.model("referrals", referralSchema)