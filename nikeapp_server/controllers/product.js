import Product from "../models/Product.js";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.send({ status: 'OK', data: product });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ id: productId });
    res.status(200).json(product);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
