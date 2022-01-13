const path = require('path');
const express = require ('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
/**
 * require router
 */
const workoutRouter = require ('./Router/workouts');
/**
 * handle parsing the body of the request
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
/*
 * Requests for static files
 */
 app.use(express.static(path.resolve(__dirname, '../dist')));

/**
 * Handle requests to the server
 */
app.use('/workouts', workoutRouter);

/**
 * Catch-all 404 handler
 */
app.use((req, res) => res.status(404).send('404: Page not found! :('))
/**
 * Global error handler
 */
 app.use(function (err, req, res, next) {
  //create a defaul error object
  const defaultErr = {
    log: 'Global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  //create an errorObj that overrides the default error obj
  const errObj = Object.assign({}, defaultErr, err);
  //console log the errObj.log
  console.log(errObj.log);
  //set response status to erroObj status and send errorObj message as json
  return res.status(errObj.status).json(errObj.message);
});
/**
 * start server
 */
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
module.exports = app;