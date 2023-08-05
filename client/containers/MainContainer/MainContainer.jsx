import React from 'react';
import IntroContainer from '../IntroContainer/IntroContainer.jsx';
import SongsContainer from '../SongsContainer/SongsContainer.jsx';
import ArtistContainer from '../ArtistContainer/ArtistContainer.jsx';
import GenreContainer from '../GenreContainer/GenreContainer.jsx';

const MainContainer = (props) => {
  return (
    <div className="mx-10 grid-cols-1 h-screen">
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
