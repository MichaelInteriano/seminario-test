//instancia del servidor express
var express = require('express');
//instancia del metodo router de express
var router = express.Router();

var vehiculoController = require('../../controllers/api/vehiculoControllerAPI');
//rutas del select
router.get('/', vehiculoController.vehiculo_list);

module.exports = router;