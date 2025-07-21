const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Input = sequelize.define('Input', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  clave: { type: DataTypes.STRING }
}, {
  tableName: 'inputs',
  timestamps: false
});

module.exports = Input;