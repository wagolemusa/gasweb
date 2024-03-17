import mongoose from "mongoose";


const sellaccessorySchema = new mongoose.Schema({
    nameaccessory : {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.models.Accessory || mongoose.model("Accessory",sellaccessorySchema)

