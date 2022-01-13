const fs = require ('fs');
const path = require('path');
const db = require('../Models/workoutModels');

const workoutController = {};

const workoutAdder = `INSERT INTO workoutentry (journal_entry) VALUES ($1) RETURNING *`

workoutController.addEntry = async (req, res, next) => {
  const { journal_entry } = req.body;
  try{
    const params = [journal_entry];
    const result = await db.query(workoutAdder, params);
    res.locals.journalEntry = result.rows[0];
    return next();
  }
  catch (err) {
    next(
      {
        log: `workoutController.addEntry: ERROR: ${err}`,
        message: { err: 'Couldn\'t add entry, check server logs' },
      }
    )
  }
}

module.exports = workoutController;