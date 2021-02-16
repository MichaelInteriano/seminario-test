var Vehiculo = require('../../models/vehiculo');

exports.vehiculo_list = function(req,res){
    res.status(200).json({
        vehiculos: Vehiculo.allVehiculos
    });
}