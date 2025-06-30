import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: true,
      enum: ["electronics", "clothing", "home", "books", "toys"],
    },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
    imageUrl: {
      type: String,
      required: true,
      match: [
        /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/,
        "Please enter a valid image URL",
      ],
    },
    isFeatured: { type: Boolean, default: false },
    color: {
      type: String,
      required: true,
      enum: ["red", "blue", "green", "black", "white", "yellow", "purple"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("Product", ProductSchema);
