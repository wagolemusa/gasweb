import mongoose from "mongoose";


const pointsSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    cylinderSize: {
        type: String,
        required: true
    },
    cylinderType: {
        type: String,
        required: true
    },
    points: {
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
export default mongoose.models.Points || mongoose.model("points", pointsSchema)






