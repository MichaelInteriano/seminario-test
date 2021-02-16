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

//metodo para buscar un elemento por id
Vehiculo.RemoveById = function(aVehi){
    //ciclo for recorre todo el arreglo de vehiculos buscando el id
    for( var i=0; i<=Vehiculo.allVehiculos.length;i++){
        if (Vehiculo.allVehiculos[i].id == aVehi){
            //remueve el elemento con splice
            Vehiculo.allVehiculos.splice(i,1);
        }
    }

}

//metodo para update
Vehiculo.findbyid = function(aVehi){
    //compare dentro del arreglo con el id enviado de parametro
    var aVehi = Vehiculo.allVehiculos.find(x=> x.id == aVehi)
    if(aVehi)
        return aVehi

    else 
        throw new Error(`No existe el vehiculo con id ${aVehi}`)
}

var a = new Vehiculo(1, 'Negro', 'Ford', 'Escape');
var b = new Vehiculo(2, 'Gris', 'Nissan', 'Sentra');

Vehiculo.add(a);
Vehiculo.add(b);

//para exportar la clase
module.exports = Vehiculo;