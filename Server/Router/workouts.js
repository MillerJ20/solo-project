const express = require('express');
const workoutController = require('../Controller/workoutController');
const router = express.Router();

router.post('/entry', workoutController.addEntry, (req, res) => {
  res.status(200).json(res.locals.journalEntry)
})

module.exports = router;