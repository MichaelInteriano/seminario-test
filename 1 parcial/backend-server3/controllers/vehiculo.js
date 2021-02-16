var vehiculo= require('../models/vehiculo');

exports.vehiculo_list = function(req,res) {
    res.render('vehiculos/index',{vehis:vehiculo.allVehiculos})
}