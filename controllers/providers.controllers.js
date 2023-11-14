const Provider = require("../models/providers.model");

// POST
const createProviders = async (req, res) => {
  try {
    const data = req.body;
    let answer = await new Provider(data).save();
    res.status(201).json({ message: "proveedor creado", provider: answer });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
// GET
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find({}, "-_id -__v");
    res.status(200).json(providers);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
// PUT
const editProviders = async (req, res) => {
  try {
    const providers = await Provider.findOneAndUpdate(
      { company_name: req.body.company_name },
      req.body,
      {new:true}
    );
    res.status(200).json({
      message: `producto actualizado ${req.body.company_name}`,
      provider: products,
    });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE
const deleteProviders = async (req, res) => {
  try {
    const providers = await Provider.deleteOne({
      company_name: req.body.company_name,
    });
    res
      .status(200)
      .json({ message: `Se ha borrado el producto${req.body.company_name}` });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const providersControllers = {
  createProviders,
  getProviders,
  editProviders,
  deleteProviders,
};

module.exports = providersControllers;
