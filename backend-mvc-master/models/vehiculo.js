//clase vehiculo              parametros
var Vehiculo = function(id, color, marca, modelo){
    this.id = id; //
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
}

// definicion del Arreglo de vehiculos
Vehiculo.allVehiculos = [];

//Metodo para agregar vehiculos al arreglo
Vehiculo.add = function (aVehi){
    Vehiculo.allVehiculos.push(aVehi);//push manda el vehiculo para agregarlo al arreglo
}

var a = new Vehiculo(1, 'Negro', 'Ford', 'Escape');
var b = new Vehiculo(2, 'Gris', 'Nissan', 'Sentra');

Vehiculo.add(a);
Vehiculo.add(b);

//para exportar la clase
module.exports = Vehiculo;

