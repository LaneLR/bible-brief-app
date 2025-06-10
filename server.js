require('dotenv').config();
const app = require('./server/app');
const sequelize = require('./server/db'); 
const cors = require("cors")
// Allow CORS
app.use(cors());

const PORT = process.env.PORT || 3535;

const ip = '10.0.0.215'

async function init() {
  try {
    await sequelize.sync();

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

init();