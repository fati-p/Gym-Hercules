const express = require('express');
const path = require('path');
const app = express();

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar las vistas
app.set('vistas', path.join(__dirname, 'vistas'));
app.set('vistas engine', 'html');

// Rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Puerto de la aplicación
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});