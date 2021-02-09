//instancia del servidor express
var express = require('express');
//instancia del metodo router de express
var router = express.Router();
//instancia del controlador
var vehiculoController = require('../controllers/vehiculo');
//
router.get('/', vehiculoController.vehiculo_list);

module.exports = router;


/*
  Metodos http:
   - get : parametros por medio de URL SELECT
   - post : parametros por medio de un formulario web INSERT
   - put : Actualizaciones  UPDATE
   - delete : Eliminacion DELETE
*/

