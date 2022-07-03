const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mssg: 'get all workouts' });
});

router.get('/:id', (req, res) => {
  res.json({ mssg: 'get a single workout' });
});

router.post('/', (req, res) => {
  res.json({ mssg: 'post a new workout' });
});

router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ mssg: 'update workout' });
});

module.exports = router;
