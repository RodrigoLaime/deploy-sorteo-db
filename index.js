var $ltMAx$express = require("express");
var $ltMAx$mongoose = require("mongoose");
var $ltMAx$bodyparser = require("body-parser");
var $ltMAx$path = require("path");
var $ltMAx$dotenv = require("dotenv");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $4fa36e821943b400$var$__dirname = "src";

const $4fa36e821943b400$var$app = $ltMAx$express();



const $4fa36e821943b400$var$port = 3000;
//archivos estaticos busca  el archivo  htlm
$4fa36e821943b400$var$app.use($ltMAx$express.static($ltMAx$path.join($4fa36e821943b400$var$__dirname, "./public")));
var $e2f0f76cb258f529$exports = {};

$ltMAx$dotenv.config();
const $e2f0f76cb258f529$var$config = {
    apiKey: "q1kMHqGtFxS57YUI"
};
$e2f0f76cb258f529$exports = {
    config: $e2f0f76cb258f529$var$config
};


var $4fa36e821943b400$require$config = $e2f0f76cb258f529$exports.config;
const $4fa36e821943b400$var$api = $4fa36e821943b400$require$config.apiKey;
const $4fa36e821943b400$var$url = `mongodb+srv://hp-envy:${$4fa36e821943b400$var$api}@cluster0.kpp1aja.mongodb.net/sorteo`;
/* const url = 'mongodb+srv://hp-envy:q1kMHqGtFxS57YUI@cluster0.kpp1aja.mongodb.net/sorteo' */ // configuracion para evitar fallo de coneccion
$ltMAx$mongoose.Promise = $parcel$global.Promise;
var $080f64db532f8fe7$exports = {};

var $f510f75d051e70d0$exports = {};
var $7921ea480ae8d40d$exports = {};
"use strict";

var $7921ea480ae8d40d$var$Schema = $ltMAx$mongoose.Schema;
var $7921ea480ae8d40d$var$mongoSchema = new $7921ea480ae8d40d$var$Schema({
    name: String
});
$7921ea480ae8d40d$exports = $ltMAx$mongoose.model("winner", $7921ea480ae8d40d$var$mongoSchema);



//creamos un objeto controller para disponer de todos los métodos de ruta:
var $f510f75d051e70d0$var$sorteoController = {
    //Método para guardar un artículo:
    save: (req, res)=>{
        var params = req.body;
        console.log(params);
        //Objeto a guardar
        var schema = new $7921ea480ae8d40d$exports();
        // Asignar valores
        schema.name = params.name;
        // Guardamos el articulo
        schema.save((err, userWinner)=>{
            if (err || !userWinner) return res.status(404).send({
                status: "error",
                message: "La nota no se ha guardado !!!"
            });
            // Devolver una respuesta 
            return res.status(200).send({
                status: "success",
                userWinner: userWinner
            });
        });
    },
    //metodo para obtener winner
    getSorteo: (req, res)=>{
        let query = $7921ea480ae8d40d$exports.find({}); //devuelve todo en la consulta
        query.sort("-date").exec((err, data)=>{
            if (err) return res.status(500).send({
                status: "Error",
                message: "Error al extraer los datos"
            });
            //si no existen datos
            if (!data) return res.status(404).send({
                status: "Error",
                message: "No hay datos para mostrar"
            });
            //si existen datos
            return res.status(200).send({
                status: "Succes",
                data: data
            });
        });
    }
};
$f510f75d051e70d0$exports = $f510f75d051e70d0$var$sorteoController;


// llamamos al objeto router express
var $080f64db532f8fe7$var$router = $ltMAx$express.Router();
$080f64db532f8fe7$var$router.post("/sorteo", $f510f75d051e70d0$exports.save);
$080f64db532f8fe7$var$router.get("/winner", $f510f75d051e70d0$exports.getSorteo);
/*
router.delete('./delete/id', sorteoController.deleteSorteo);
router.put('./update/id', sorteoController.updateSorteo); */ $080f64db532f8fe7$exports = $080f64db532f8fe7$var$router;


//cargar body parser
$4fa36e821943b400$var$app.use($ltMAx$bodyparser.urlencoded({
    extended: false
}));
//cualquier tipo de peticion la convertimos en json
$4fa36e821943b400$var$app.use($ltMAx$bodyparser.json());
//midleware activar el cors para permitir peticion ajax y http desde el front 
$4fa36e821943b400$var$app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Authorization, X-API-KEY, Origin, X-Requested-With, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//cargar los archivos de ruta de la app
$4fa36e821943b400$var$app.use("/api", $080f64db532f8fe7$exports);
$ltMAx$mongoose.connect($4fa36e821943b400$var$url, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Coneccion exito a la basde de datos mongoDB");
    $4fa36e821943b400$var$app.listen($4fa36e821943b400$var$port, ()=>{
        console.log("corriendo en el puerto " + $4fa36e821943b400$var$port);
    });
}) /* q1kMHqGtFxS57YUI */ ;


//# sourceMappingURL=index.js.map
