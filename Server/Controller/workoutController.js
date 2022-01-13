const fs = require ('fs');
const path = require('path');
const db = require('../Models/workoutModels');

const workoutController = {};

const entryList = `SELECT * FROM workoutentry`
const workoutAdder = `INSERT INTO workoutentry (journal_entry) VALUES ($1) RETURNING *`

workoutController.addEntry = async (req, res, next) => {
  const { journal_entry } = req.body;
  try{
    const params = [journal_entry];
    const result = await db.query(workoutAdder, params);
    res.locals.journalEntry = result.rows[0];
    console.log(res.locals.journalEntry);
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

workoutController.getEntries = (req, res, next) => {
  db.query(entryList)
  .then((data) => {
    res.locals.entries = data.rows;
    return next();
  })
  .catch ((e) => {
    console.log(e);
    return next({
      log: `workoutController.getEntries could not find the list of entries in the DB`,
      message: { err: `Couldn't retrieve entryList, check server logs` },
    });
  });
};

module.exports = workoutController;