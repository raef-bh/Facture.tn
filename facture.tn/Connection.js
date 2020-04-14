const mongoose = require ('mongoose');
//connection à la bd 
mongoose.connect('mongodb://localhost/users_test');
//verification de la connection
mongoose.connection.once('open',function(){
console.log('connection réussi avec succée ');
}).on('error',function(error){
    console.log('erreur de a connection',error);
});