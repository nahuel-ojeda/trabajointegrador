
const express = require('express');
const app = express();

app.listen(3030, () => console.log('servidor funcionando en el puerto 3030'))

const routesAutos = require('./routes/autos');
const routesHome = require('./routes/home');
const routesSucursales = require('./routes/sucursales');
const routesMarcas = require('./routes/marcas');

app.use('/', routesHome);
app.use('/sucursales', routesSucursales);
app.use('/marcas', routesMarcas);
app.use('/autos', routesAutos);