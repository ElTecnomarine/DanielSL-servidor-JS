const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let jugador = {
 nombre:'',
 apellido: '',
 score:''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};
app.get('/', function(req, res) 
{
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
});

app.post('/jugador', function (req, res) 
{
 respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
 if(!req.body.nombre|| !req.body.apellido|| !req.body.score) 
 {
  respuesta = {
   error: true,
   codigo: 501,
   mensaje: 'Todos los campos requeridos no está llenos'
  };
 } 
 else 
 {
     if(jugador.nombre == req.body.nombre && jugador.apellido == req.body.apellido)
     {
        respuesta = {
            error: true,
            codigo: 503,
            mensaje: 'Jugador ya creado'
        };
     }
     else
     {
        jugador = {
            nombre: req.body.nombre,
            score: req.body.score,
            apellido: req.body.apellido

        };
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Jugador creado con éxito',
            respuesta: jugador
        };
     }

 }
 res.send(respuesta);
});


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
