var Vehiculo = require('../models/vehiculo');

//select
exports.vehiculo_list = function(req, res){
    res.render('vehiculos/index', {vehis:Vehiculo.allVehiculos})
}

//para el form
exports.vehiculo_create_get = function(req, res){
    res.render('vehiculos/create');
}

//create
exports.vehiculo_create_post = function(req, res){
    //crea nuevo vehiculo manda los datos de la vista al modelo luego del submit re.body datos del form
    var vehi = new Vehiculo(req.body.id, req.body.color,
                            req.body.marca, req.body.modelo);
    
    //metodo add recibe el buevo creado arriba
    Vehiculo.add(vehi);

    //redirige para visualizar
    res.redirect('/vehiculos');

    
}