import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter Product name']
    },
    description: {
        type: String,
        required: [true, 'Please enter Product Decsription']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },

        }
    ],

    promotion: {
        type: String,
        default: "notpromo"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product || 
mongoose.model("Product", productSchema);

