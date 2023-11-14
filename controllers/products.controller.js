const Product = require("../models/products.model");
const Provider = require("../models/providers.model");


// CREATE
const createProduct = async (req, res) => {
  try {
    const { title, price, description, provider } = req.body;
    const providers = await Provider.find({
      company_name: provider,
    });
    const providers_id = providers[0]._id.toString();
    const data = { title, price, description, provider: providers_id };
    let answer = await new Product(data).save();
    res.status(201).json({ message: "producto creado", products: answer });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// GET
const getProduct = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("provider", "-_id -__v")
      .select("-_id -__v");
    res.status(200).json(products); 
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPATE
const editProduct = async (req, res) => {
  try {
    const products = await Product.findOneAndUpdate(
      { title: req.body.title },
      req.body,
      {new:true}
    );
    res.status(200).json({
      message: `producto actualizado ${req.body.title}`,
      product: products,
    });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  try {
    const products = await Product.deleteOne({ title: req.body.title });
    res
      .status(200)
      .json({ message: `Se ha borrado el producto${req.body.title}` });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};


module.exports = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
};
