var Vehiculo = function(id, color, marca, modelo){
    this.id = id;
    this.color = color;
    this.marca = marca;
    this.modelo = modelo
}

//Arreglo de vehiculos
Vehiculo.allVehiculos = [];

//Metodo para agregar vehiculos al arreglo

Vehiculo.add = function (aVehi){
    Vehiculo.allVehiculos.push(aVehi);
}

var a = new Vehiculo(1, 'Negro', 'Ford', 'Escape');
var b = new Vehiculo(2, 'Gris', 'Nisssan', 'Sentra');

Vehiculo.add(a);
Vehiculo.add(b);

module.exports = Vehiculo;

