const express = require('express');
const router = express.Router();
const Input = require('../models/inputs');

router.post('/', async (req, res) => {
  try {
    const { clave } = req.body;
    if (!clave) return res.status(400).json({ error: 'Falta la clave' });

    const nuevo = await Input.create({ clave });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear input' });
  }
});

module.exports = router;
