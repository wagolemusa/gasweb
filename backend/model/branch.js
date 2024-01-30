import mongoose from "mongoose";

const branchSchema = mongoose.Schema({
     branchName: {
        type: String,
        required: true
     },
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
})

export default mongoose.models.Branchies || mongoose.model("branchies", branchSchema)