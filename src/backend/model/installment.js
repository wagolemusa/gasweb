import mongoose from "mongoose";
const installmentSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true,
    },
     amount: {
        type: Number,
        default: 0
     },
     cylinderSize: {
        type: String,
        required: true,
     },
     cylinderType: {
        type: String,
        required: true,
     },
     installmentPaid: {
        type: Number,
        default: 1000
     },
     balance: {
        type: Number,
        default: 1000
     },
     status: {
        type: String,
        default: "Not-Cleared"
     },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
export default mongoose.models.Installment || mongoose.model("Installment", installmentSchema)
