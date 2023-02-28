const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
//archivos estaticos busca  el archivo  htlm
app.use(express.static(path.join(__dirname, './public')));

//envairoment
const { config } = require('../config')
const api = config.apiKey;

const url = `mongodb+srv://hp-envy:${api}@cluster0.kpp1aja.mongodb.net/sorteo`;

/* const url = 'mongodb+srv://hp-envy:q1kMHqGtFxS57YUI@cluster0.kpp1aja.mongodb.net/sorteo' */
// configuracion para evitar fallo de coneccion
mongoose.Promise = global.Promise;

var router = require('./routes/rutaSorteo');

//cargar body parser
app.use(bodyParser.urlencoded({ extended: false }));
//cualquier tipo de peticion la convertimos en json
app.use(bodyParser.json());

//midleware activar el cors para permitir peticion ajax y http desde el front 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'Authorization, X-API-KEY, Origin, X-Requested-With, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//cargar los archivos de ruta de la app
app.use('/api', router);
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('Coneccion exito a la basde de datos mongoDB');
    app.listen(port, () => {
      console.log('corriendo en el puerto ' + port);
    })
  })






/* q1kMHqGtFxS57YUI */