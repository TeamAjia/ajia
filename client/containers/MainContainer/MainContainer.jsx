import React from 'react';
import IntroContainer from '../IntroContainer/IntroContainer.jsx';
import SongsContainer from '../SongsContainer/SongsContainer.jsx';
import ArtistContainer from '../ArtistContainer/ArtistContainer.jsx';
import GenreContainer from '../GenreContainer/GenreContainer.jsx';
import { extractCode } from '../../helpers/helpers.js';
import { useEffect } from 'react';

const MainContainer = (props) => {
  useEffect(() => {
    extractCode();
    console.log(localStorage.getItem('access_token'));
    const data = {
      toke: localStorage.getItem('access_token'),
    };

    console.log('main cont', data);
    console.log('main cont', JSON.stringify(data));

    const getData = async (data) => {
      // await fetch('/name', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });

      const response = await fetch('/api/artists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const artists = await response.json();
      console.log('main container', artists);

      // await fetch('/songs', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });
      // await fetch('/genres', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });
    };
    getData(data);
  }, []);

  return (
    <div className='mx-10 grid-cols-1 h-screen'>
      <IntroContainer />
      <div>
        <h2>Top 10 Songs</h2>
        <SongsContainer />
      </div>
      <div>
        <h2>Top 10 Artist</h2>
        <ArtistContainer />
      </div>
      <div>
        <h2>Top Genres</h2>
        <GenreContainer />
      </div>
    </div>
  );
};

export default MainContainer;
