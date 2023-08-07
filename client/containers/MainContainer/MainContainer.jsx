import React, { useState } from 'react';
import IntroContainer from '../IntroContainer/IntroContainer.jsx';
import SongsContainer from '../SongsContainer/SongsContainer.jsx';
import ArtistContainer from '../ArtistContainer/ArtistContainer.jsx';
import GenreContainer from '../GenreContainer/GenreContainer.jsx';
import { extractCode } from '../../helpers/helpers.js';
import { useEffect } from 'react';

const MainContainer = (props) => {
  const [topTenSong, setTopTenSongs] = useState([]);
  const [topTenArtists, setTopTenArtists] = useState([]);
  const [topTenGenre, setTopGenre] = useState([]);
  const [username, setUsername] = useState({});

  useEffect(() => {
    extractCode();
    console.log(localStorage.getItem('access_token'));
    const data = {
      toke: localStorage.getItem('access_token'),
    };

    console.log('main cont', data);
    console.log('main cont', JSON.stringify(data));

    const getData = async (data) => {
      //Gets username from spotify api
      const userResponse = await fetch('/api/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      setUsername(user);

      //gets list of top 10 songs from spotify api
      const songResponse = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const songs = await response.json();
      setTopTenSongs(songs);

      //gets list of top 10 artists form spotify api
      const artistResponse = await fetch('/api/artists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const artists = await response.json();
      setTopTenArtists(artists);
      console.log('main container', artists);

      //Gets top 10 genres from spotify
      const genreResponse = await fetch('/api/genres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const genres = await response.json();
      setTopGenre(genres);
    };
    getData(data);
  }, []);

  return (
    <div className="mx-10 grid-cols-1 h-screen">
      <IntroContainer username={username} />
      <div>
        <h2>Top 10 Songs</h2>
        <SongsContainer topSongs={topTenSong} />
      </div>
      <div>
        <h2>Top 10 Artist</h2>
        <ArtistContainer topArtists={topTenArtists} />
      </div>
      <div>
        <h2>Top Genres</h2>
        <GenreContainer topGenre={topTenGenre} />
      </div>
    </div>
  );
};

export default MainContainer;
