
//instancia del servidor express
var express = require('express');
//instancia del metodo router de express
var router = express.Router();
//instancia del controlador
var vehiculoController = require('../controllers/vehiculo');

//rutas del select
router.get('/', vehiculoController.vehiculo_list);

//rutas para crear
router.get('/create', vehiculoController.vehiculo_create_get);
router.post('/create', vehiculoController.vehiculo_create_post);
//ruta delete
router.post('/:id/delete', vehiculoController.vehiculo_delete_post);

router.get('/:id/update', vehiculoController.vehiculo_update_get);
router.post('/:id/update', vehiculoController.vehiculo_update_post);

module.exports = router;


/*
  Metodos http:
   - get : parametros por medio de URL SELECT
   - post : parametros por medio de un formulario web INSERT
   - put : Actualizaciones  UPDATE
   - delete : Eliminacion DELETE
*/

