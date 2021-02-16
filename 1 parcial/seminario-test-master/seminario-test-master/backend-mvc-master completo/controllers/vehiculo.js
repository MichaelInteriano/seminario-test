//importar el modelo para que el controlador funcione
var Vehiculo = require('../models/vehiculo');

//funcion encargada de devolver el arreglo de vehiculos
exports.vehiculo_list = function (req, res) {
    //vehis variable que renderiza y manda todo el arr de vehiculos al index
    res.render('vehiculos/index', { vehis: Vehiculo.allVehiculos })
}

//para el form
exports.vehiculo_create_get = function (req, res) {
    res.render('vehiculos/create');
}

//create
exports.vehiculo_create_post = function (req, res) {
    //crea nuevo vehiculo manda los datos de la vista al modelo luego del submit re.body datos del form
    var vehi = new Vehiculo(req.body.id, req.body.color,
        req.body.marca, req.body.modelo);

    //metodo add recibe el buevo creado arriba
    Vehiculo.add(vehi);

    //redirige para visualizar
    res.redirect('/vehiculos');
}

//delete
exports.vehiculo_delete_post = function (req, res) {
    //la funcion recibe un id por medio del body
    Vehiculo.RemoveById(req.body.id);

      //redirige para visualizar el principal
      res.redirect('/vehiculos');
}

//update
exports.vehiculo_update_get = function (req, res) {
    //la funcion recibe un id por medio del body
    var vehi = Vehiculo.findbyid (req.params.id);

      //redirige para visualizar el principal
      res.render('vehiculos/update',{vehi});
}

//update
exports.vehiculo_update_post = function (req, res) {
    //la funcion recibe un id por medio del body
    var vehi = Vehiculo.findbyid (req.params.id);

    vehi.id = req.body.id;
    vehi.color = req.body.color;
    vehi.marca = req.body.marca;
    vehi.modelo = req.body.modelo;
    
    res.redirect('/vehiculos');
}
