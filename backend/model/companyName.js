import mongoose from "mongoose";

const companyNameSchema = mongoose.Schema({

    name: {
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

export default mongoose.models.CompanyName || mongoose.model("CompanyName", companyNameSchema)