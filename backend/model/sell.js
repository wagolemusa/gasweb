import mongoose from "mongoose";

const sellSchema = mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    cylinderSize: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    
})
export default mongoose.models.Sell || mongoose.model("Sell",  sellSchema)