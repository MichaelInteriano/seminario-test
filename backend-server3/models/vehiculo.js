var vehiculo= function(id,color,marca,modelo){
    this.id=id;
    this.color=color;
    this.marca=marca;
    this.modelo=modelo;
}

//arreglo de vehiculos
vehiculo.allVehiculos=[];

vehiculo.add=function(aVehi){
vehiculo.allVehiculos.push(aVehi);
}

var a= new vehiculo(1,'negro','ford','Escape');
var b= new vehiculo(2,'negro','Nissan','22R');
vehiculo.add(a);
vehiculo.add(b);

module.exports = vehiculo;