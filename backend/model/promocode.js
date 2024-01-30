import mongoose from "mongoose";


const promocodeSchema = mongoose.Schema({
    promo: {
        type: String,
        required: true
    },
    amount: {
        type: Number ,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
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
export default mongoose.models.Promocode || mongoose.model("promocode", promocodeSchema)






