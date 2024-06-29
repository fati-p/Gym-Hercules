const express = require('express');
const path = require('path');
const app = express();
const mysql = require("mysql");
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registro'
    });

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// Configurar PARA LAS URL
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));


// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index'); // Renderiza el archivo index.ejs
});

// Ruta para acerca.html
app.get('/acerca.html', (req, res) => {
    res.render('acerca'); // Renderiza el archivo acerca.ejs
});

// Otras rutas para las demás páginas
app.get('/inicio.html', (req, res) => {
    res.render('inicio'); // Renderiza el archivo inicio.ejs
});

app.get('/index.html', (req, res) => {
    res.render('index'); // Renderiza el archivo index.ejs
});

app.get('/BLOG.HTML', (req, res) => {
    res.render('BLOG'); // Renderiza el archivo BLOG.ejs
});

//CONFIGURACION DEL FORMULARIO //

app.get('/CONTACTO.html', (req, res) => {
    res.render('CONTACTO'); // Renderiza el archivo CONTACTO.ejs
});

app.get("/",function(req,res){
    res.render("CONTACTO");
});

app.post("/validar", function(req,res){
    const datos = req.body;

    let usuario = datos.txt;
    let contraseña = datos.pass;

    let registrar = "INSERT INTO usuarios(usuario,contraseña) VALUES ('"+usuario+"','"+contraseña+"')";

    conexion.query(registrar,function(error){
        if(error){
            throw error;
            }
            else
            {
                console.log("datos guardados con éxito");
            }
      });
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
