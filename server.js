const express = require('express')
const cowsay = require('cowsay')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
const productsRoutes = require("./routes/products.routes");
const providersRoutes = require('./routes/providers.routes');
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rutas
app.use('/api/products',productsRoutes);
app.use('/api/providers',providersRoutes);


// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})