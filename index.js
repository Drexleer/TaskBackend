require('dotenv').config();
const server = require('./src/app');
const sequelize = require('./src/config/database');
const PORT = process.env.PORT || 3001;

sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Database Error', err);
  });

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
