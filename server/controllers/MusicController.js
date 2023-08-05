// /getName /getSongs /getGenre /getArtists

const MusicController = {};

MusicController.getName = () => {
  const { toke } = req.body;
};

MusicController.getArtist = (req, res, next) => {
  console.log('getArtis HERE');
  const { toke } = req.body;
  console.log(toke);
  fetch(
    'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=7&offset=0',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + toke,
      },
    }
  )
    // .then((response) => response.json())
    .then((data) => {
      console.log('spotify res', data);
      res.locals.artists = data;
      return next();
    });
};

MusicController.getSongs = () => {};
MusicController.getGenre = () => {};

module.exports = MusicController;
