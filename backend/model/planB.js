import mongoose from "mongoose";

const planBSchema = mongoose.Schema({
    companyName:{
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
    cashPaid: {
        type: String,
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
export default mongoose.models.PlanB || mongoose.model("PlanB",  planBSchema)