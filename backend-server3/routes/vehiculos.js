var express = require('express');
var router = express.Router();
var vehiculoController = require('../controllers/vehiculo');

router.get('/',vehiculoController.vehiculo_list);
module.exports = router;
