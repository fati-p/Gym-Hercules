const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/index.html'));
});

// Ruta para acerca.html
router.get('/acerca.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/acerca.html'));
});

// Otras rutas para las demás páginas
router.get('/inicio.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/inicio.html'));
});

router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/index.html'));
});

router.get('/BLOG.HTML', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/BLOG.HTML'));
});

router.get('/CONTACTO.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/CONTACTO.html'));
});

module.exports = router;



