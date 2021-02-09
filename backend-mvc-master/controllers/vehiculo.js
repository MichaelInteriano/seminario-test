//importar el modelo para que el controlador funcione
var Vehiculo = require('../models/vehiculo');

//funcion encargada de devolver el arreglo de vehiculos
exports.vehiculo_list = function(req, res){
    //vehis variable que renderiza y manda todo el arr de vehiculos al index
    res.render('vehiculos/index', {vehis:Vehiculo.allVehiculos})
}

