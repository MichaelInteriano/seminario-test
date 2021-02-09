var express = require('express');
var router = express.Router();
var vehiculoController = require('../controllers/vehiculo');

router.get('/', vehiculoController.vehiculo_list);

//rutas para crear
router.get('/create', vehiculoController.vehiculo_create_get);
router.post('/create', vehiculoController.vehiculo_create_post);

module.exports = router;



