const express = require('express');
require('dotenv').config();
const routes = require('./routes/workouts.js');

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method, res.statusCode);
  next();
});

app.use('/api/workouts', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
