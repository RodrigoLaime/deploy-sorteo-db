const schema = require('../models/schema');
const Schema = require('../models/schema');

//creamos un objeto controller para disponer de todos los métodos de ruta:
const sorteoController = { //

  //Método para guardar un artículo:
  save: (req, res) => {

    var params = req.body;
    console.log(params);
    //Objeto a guardar
    var schema = new Schema();

    // Asignar valores
    schema.name = params.name;

    // Guardamos el articulo
    schema.save((err, userWinner) => {

      if (err || !userWinner) {
        return res.status(404).send({
          status: 'error',
          message: 'La nota no se ha guardado !!!'
        });
      }

      // Devolver una respuesta 
      return res.status(200).send({
        status: 'success',
        userWinner
      });

    });

  },

  //metodo para obtener winner
  getSorteo: (req, res) => {
    let query = schema.find({});
    //devuelve todo en la consulta
    query.sort('-date').exec((err, data) => {
      if (err) {
        return res.status(500).send({
          status: 'Error',
          message: 'Error al extraer los datos'
        });
      }
      //si no existen datos
      if (!data) {
        return res.status(404).send({
          status: 'Error',
          message: 'No hay datos para mostrar'
        });
      }
      //si existen datos
      return res.status(200).send({
        status: 'Succes',
        data,
      });
    });
  },

}

module.exports = sorteoController