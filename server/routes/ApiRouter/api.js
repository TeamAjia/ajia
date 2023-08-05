const path = require('path');

// import express
const express = require('express');

// import controllerspath.
const MusicController = require('../../controllers/MusicController.js');

//create router object in express
const router = express.Router();

// endpoints
// router.get, getName
router.get('/name', MusicController.getName, (req, res) => {});

// router.get, getArtist
router.get('/artists', MusicController.getArtist, (req, res) => {});

// router.get, getSongs
router.get('/songs', MusicController.getSongs, (req, res) => {});

// router.get, getGenre
router.get('/genres', MusicController.getGenre, (req, res) => {});

// export router
module.exports = router;
