const Schema = require('../models/schema');

//creamos un objeto controller para disponer de todos los métodos de ruta:
const sorteoController = {

  //Método para guardar un artículo:
  save: (req, res) => {

    const params = req.body;
    console.log(params);

    //Objeto a guardar
    const schema = new Schema();

    // Asignar valores
    schema.name = params.name;
    schema.amount = params.amount;

    // Guardamos el articulo
    schema.save((err, userWinner) => {
      if (err || !userWinner) {
        return res.status(404).send({
          status: 'error',
          message: 'El jugador no se ha guardado !!!'
        });
      }

      // Devolver una respuesta 
      return res.status(200).send({
        status: 'El jugador se guardo en la base de datos con exito !!',
        userWinner
      });

    });

  },

  //metodo para obtener winner
  getSorteo: (req, res) => {
    //encuentra el objeto
    let query = Schema.find({});

    //devuelve todo en la consulta de forma desendente
    query.sort('-date').exec((err, data) => {
      if (err) {
        return res.status(500).send({
          status: 'Error',
          message: 'Error al traer juagodores'
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
        data
      });
    });
  },

  update: (req, res) => {
    const noteId = req.params.id;

    //Recogemos los datos del body
    const params = req.body;

    // Asignar valores
    const name = params.name;
    const amount = params.amount;

    //actualiza un unico documento
    Schema.findOneAndUpdate({ _id: noteId }, { name: name, amount: amount }, { new: true }, (err, userUpdated) => {

      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al actualizar!!"
        });
      }

      if (!userUpdated) {
        return res.status(404).send({
          status: "error",
          message: "Error, no existe el jugador!!"
        });
      }

      //Si no hay ningún error obtenemos la nota actualizada

      return res.status(200).send({
        status: "success",
        article: userUpdated
      });
    });
  }
}


module.exports = sorteoController