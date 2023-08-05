const path = require('path');

// import express
const express = require('express');

// import controllerspath.
const AuthController = require('../../controllers/AuthController.js');

//create router object in express
const router = express.Router();

// endpoints
router.get('/login', AuthController.getCode, (req, res) => {
  return res.status(200).redirect(res.locals.url);
});

// export router
module.exports = router;
