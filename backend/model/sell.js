import mongoose from "mongoose";

const sellSchema = mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    cylinders:[
        {
            cylinderType:{type: String, required: true},
            kgs:{type: Number, required: true},
            quantity: { type: Number, required: true},
            total: { type: Number, required: false}
        }
    ],
    finalTotal: {
        type: Number,
        required: true
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