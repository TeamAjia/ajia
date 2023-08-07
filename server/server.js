const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// require the api & OAuth routers
const apiRouter = require('./routes/ApiRouter/api.js');
const OAuthRouter = require('./routes/OAuth/oAuth.js');

// create object app that contains the express framework API
const app = express();

const PORT = 3000;

/**
 * express.json() - parses from JSON to js
 * express.urlencode - parses incoming request objects into strings or arrays
 * cookie-parse - parses cookies
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// import static files?
//app.use(express.static(path.resolve(__dirname, 'ADD PATH')))

// app.use for the api & OAuth routers
app.use('/api', apiRouter);
app.use('/OAuth', OAuthRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../build/index.html'));
});

// error handling (for all other routes)
app.use('*', (req, res) => {
  res.status(404).send('ERROR: 404 Not Found');
});

// global error handling
app.use((err, res, req, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errObj = Object.assign(defaultError, err);

  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
