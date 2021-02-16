var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('hola mundo con express');
})

app.listen(3000,function(){
    console.log('servidor corriendo en 127.0.0.1 puerto 3000');
});
