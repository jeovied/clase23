const express = require ('express');
const app = express();
const port = 3000;

//  req -->>> request (peticion)
//  res -->>> response (respuesta)
//SIEMPRE el request y el response, van como parametro del callback que incluye app.get

app.get('/',(req,res) => res.send('Por fin llegamos al navegador')) //ruta raiz de localhost:3000

app.get('/contactos',(req,res) => res.send('Pagina de contacto'))

app.get('/productos',(req,res) => res.send('Listado de productos'))

app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));

/* app.listen(3000), function(){
    return console.log("Servidor corriendo en el puerto 3000.");
} */    //Me permite hacer lo mismo que en la linea 4, pero con funcion declarada.

