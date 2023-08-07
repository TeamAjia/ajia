const path = require('path');

// import express
const express = require('express');

// import controllerspath.
const MusicController = require('../../controllers/MusicController.js');

//create router object in express
const router = express.Router();

// endpoints
// router.get, getName
router.post(
  '/name',
  MusicController.getName,
  MusicController.getNameDetails,
  (req, res) => {
    return res.status(200).json(res.locals.name);
  }
);

// router.get, getArtist
router.post(
  '/artists',
  MusicController.getArtist,
  MusicController.getArtistDetails,
  (req, res) => {
    console.log('router', res.locals.artists);
    return res.status(200).json(res.locals.artists);
  }
);

// router.get, getSongs
router.post(
  '/songs',
  MusicController.getSongs,
  MusicController.getSongsDetails,
  (req, res) => {
    console.log('songs', res.locals.songs);
    return res.status(200).json(res.locals.songs);
  }
);

// router.get, getGenre
router.post('/genres', MusicController.getGenre, (req, res) => {});

// export router
module.exports = router;
