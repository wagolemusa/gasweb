import mongoose from "mongoose";

const cylinderStockSchema = mongoose.Schema({

     branchName: {
        type: String,
        required: true
    },
    cylinders:[
        {
            brand:{type: String, required: true},
            kgs:{type: Number, required: true},
            quantity: { type: Number, required: true},
        }
    ],
    totalCylinders:{
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

export default mongoose.models.CylinderStock || mongoose.model("CylinderStock", cylinderStockSchema)