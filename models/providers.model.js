const mongoose = require("mongoose");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  CIF: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  url_web: {
    type: String,
    require: true,
}
};

const providerSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;

