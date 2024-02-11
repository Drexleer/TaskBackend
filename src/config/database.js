const Sequelize = require('sequelize');
require('dotenv').config();
const { DATABASE_URL } = process.env;
// const DB_USER = process.env.DB_USER;

//Configuración base de datos
const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Desactiva la verificación del certificado (¡Esto puede ser inseguro en producción!)
    },
  },
});

module.exports = sequelize;
