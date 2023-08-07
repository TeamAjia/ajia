import React, { useState } from 'react';
import IntroContainer from '../IntroContainer/IntroContainer.jsx';
import SongsContainer from '../SongsContainer/SongsContainer.jsx';
import ArtistContainer from '../ArtistContainer/ArtistContainer.jsx';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer.jsx';
import { extractCode } from '../../helpers/helpers.js';
import { checkAccessToken } from '../../helpers/helpers.js';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const MainContainer = (props) => {
  const [topTenSong, setTopTenSongs] = useState([]);
  const [topTenArtists, setTopTenArtists] = useState([]);
  const [topTenPlaylists, setTopPlaylists] = useState([]);
  const [username, setUsername] = useState({});

  const setTheme = (theme) => {
    console.log('hi');
    document.querySelector('html').setAttribute('data-theme', theme);
  };

  const checkAccessToken = () => {
    if (!localStorage.getItem('access_token')) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    console.log(localStorage.getItem('access_token'));
    const data = {
      toke: localStorage.getItem('access_token'),
    };

    console.log('main cont', data);
    // console.log('main cont', JSON.stringify(data));

    const getData = async (data) => {
      //Gets username from spotify api
      const userResponse = await fetch('/api/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const user = await userResponse.json();
      setUsername(user);

      //gets list of top 10 songs from spotify api
      const songResponse = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const songs = await songResponse.json();
      setTopTenSongs(songs);

      //gets list of top 10 artists form spotify api
      const artistResponse = await fetch('/api/artists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const artists = await artistResponse.json();
      setTopTenArtists(artists);
      console.log('main container', artists);

      //Gets top 10 genres from spotify
      const playlistsResponse = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const playlists = await playlistsResponse.json();
      setTopPlaylists(playlists);
    };
    getData(data);
  }, []);

  return checkAccessToken() ? (
    <div className=' mx-10 mt-5 grid-cols-1 h-screen font-mono'>
      <IntroContainer username={username} />
      <div className='flex justify-center gap-4'>
        <button
          onClick={(e) => setTheme('mytheme')}
          data-theme='mytheme'
          className='btn btn-primary'
        >
          Original
        </button>
        <button
          onClick={(e) => setTheme('cupcake')}
          data-theme='cupcake'
          className='btn btn-primary'
        >
          cupcake
        </button>
        <button
          onClick={(e) => setTheme('coffee')}
          data-theme='coffee'
          className='btn btn-primary'
        >
          Coffee
        </button>
        <button
          onClick={(e) => setTheme('dracula')}
          data-theme='dracula'
          className='btn btn-primary'
        >
          Dracula
        </button>
        <button
          onClick={(e) => setTheme('cmyk')}
          data-theme='cmyk'
          className='btn btn-primary'
        >
          CMYK
        </button>
      </div>
      <div>
        <h2 className='text-xl mt-5'>Your Top 50 Songs</h2>
        <SongsContainer topSongs={topTenSong} />
      </div>
      <div>
        <h2 className='text-xl mt-5'>Your Top 10 Artists</h2>
        <ArtistContainer topArtists={topTenArtists} />
      </div>
      <div>
        <h2 className='text-xl mt-5'>Your Featured Playlists</h2>
        <PlaylistContainer playlists={topTenPlaylists} />
      </div>
    </div>
  ) : (
    <Navigate to='/' />
  );
};

export default MainContainer;
