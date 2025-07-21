import cors from 'cors';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const inputsRouter = require('./routes/inputs');

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'https://danielloo03.github.io/algo/' }));
app.use(bodyParser.json());
app.use('/api/inputs', inputsRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
});