const express = require('express');
const router = express.Router();
const Factura = require('../models/Factura');

// POST - Guardar factura
router.post('/', async (req, res) => {
  try {
    const factura = new Factura(req.body);
    await factura.save();
    res.status(201).json({ mensaje: 'Factura guardada correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - Obtener todas las facturas
router.get('/', async (req, res) => {
  const facturas = await Factura.find();
  res.json(facturas);
});

module.exports = router;
