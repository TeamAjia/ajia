// /getName /getSongs /getGenre /getArtists

const MusicController = {};

MusicController.getName = (req, res, next) => {
  const { toke } = req.body;

  fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + toke,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.log('spotify res', data.display_name);
      res.locals.name = data;
      return next();
    });
};

MusicController.getNameDetails = (req, res, next) => {
  console.log('in get name details middleware');
  const items = res.locals.name;
  //   console.log(items.display_name);

  const nameDetails = {
    display_name: items.display_name,
    image: items.images[0].url,
  };

  res.locals.name = nameDetails;

  //   console.log('reslocalsname', res.locals.name);

  //   console.log(res.locals.name);
  return next();
};

MusicController.getArtist = (req, res, next) => {
  //   console.log('getArtis HERE');
  const { toke } = req.body;
  //   console.log('req body', req.body);
  //   console.log('music conroller toke', toke);
  fetch(
    'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10&offset=0',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + toke,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      //   console.log('spotify res', data);
      res.locals.artists = data;
      return next();
    });
};

MusicController.getArtistDetails = (req, res, next) => {
  console.log('in get artist details middleware');
  const items = res.locals.artists.items;

  const artistDetails = [];
  for (let i = 0; i < items.length; i++) {
    const name = items[i].name;
    const genre = items[i].genres[0];
    const image = items[i].images[0].url;
    const link = items[i].uri;

    artistDetails.push({ name, genre, image, link });
  }

  // console.log(artistDetails);

  res.locals.artists = artistDetails;

  console.log(res.locals.artists);
  return next();
};

MusicController.getSongs = (req, res, next) => {
  console.log('in the music controller get songs middleware');
  const { toke } = req.body;
  fetch(
    'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + toke,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      res.locals.songs = data;
      return next();
    });
};

MusicController.getSongsDetails = (req, res, next) => {
  console.log('in get songs details middleware');
  const items = res.locals.songs.items;

  const songsDetails = [];
  for (let i = 0; i < items.length; i++) {
    const name = items[i].name;
    const duration = items[i].duration_ms;
    const artist = items[i].artists[0].name;
    const album = items[i].album.name;
    const image = items[i].album.images[0].url;
    const link = items[i].uri;

    songsDetails.push({ name, duration, artist, album, image, link });
  }

  res.locals.songs = songsDetails;

  console.log(res.locals.songs);
  return next();
};

MusicController.getPlaylists = (req, res, next) => {
  console.log('in the music controller get playlists middleware');
  const { toke } = req.body;
  fetch(
    'https://api.spotify.com/v1/browse/featured-playlists?limit=10&offset=0',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + toke,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      res.locals.playlists = data.playlists.items;
      return next();
    });
};

MusicController.getPlaylistsDetails = (req, res, next) => {
  console.log('in the music controller get playlist details middleware');
  const items = res.locals.playlists;
  //   console.log('items', items);

  //   console.log(playlistDetails);
  const playlistDetails = [];

  for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);
    const name = items[i].name;
    const image = items[i].images[0].url;
    const link = items[i].uri;
    const description = items[i].description;

    playlistDetails.push({ name, image, link, description });
  }

  res.locals.playlists = playlistDetails;

  //   console.log('hello', res.locals.playlists);
  return next();
};

module.exports = MusicController;
