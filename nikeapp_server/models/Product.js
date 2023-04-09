import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    images: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sizes: {
      type: Array,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
