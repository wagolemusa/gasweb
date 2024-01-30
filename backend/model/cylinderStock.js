import mongoose from "mongoose";

const cylinderStockSchema = mongoose.Schema({

     branchName: {
        type: String,
        required: true
    },
    cylinders:[
        {
            cylinderType:{type: String, required: true},
            kgs:{type: Number, required: true},
            quantity: { type: Number, required: true},
        }
    ],
    totalCylinders:{
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

export default mongoose.models.CylinderStocks || mongoose.model("cylinderStocks", cylinderStockSchema)