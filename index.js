const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const inputsRouter = require('./routes/inputs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = [
      'https://danielloo03.github.io/algo',
      'https://danielloo03.github.io/algo/',
    ];
    if(!origin) return callback(null, true); // para requests sin origen (postman, curl)
    if(allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error(`CORS policy: origen no permitido: ${origin}`), false);
    }
    return callback(null, true);
  }
}));
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