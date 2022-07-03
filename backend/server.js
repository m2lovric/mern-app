const express = require('express');
require('dotenv').config();
const routes = require('./routes/workouts.js');
const mongoose = require('mongoose');

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method, res.statusCode);
  next();
});

app.use('/api/workouts', routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
