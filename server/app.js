const express = require('express');
const app = express();

const cors = require("cors")
// Allow CORS
app.use(cors({
  origin: 'http://localhost:5173'  // allow only your frontend origin
}));;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});

module.exports = app;