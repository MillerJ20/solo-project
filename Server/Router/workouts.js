const express = require('express');
const workoutController = require('../Controller/workoutController');
const router = express.Router();

router.get('/', workoutController.getEntries, (req, res) => {
  res.status(200).json({ entries: [...res.locals.entries] });
})

router.post('/', workoutController.addEntry, (req, res) => {
  res.status(200).json({ entryInfo: res.locals.journalEntry });
})

module.exports = router;