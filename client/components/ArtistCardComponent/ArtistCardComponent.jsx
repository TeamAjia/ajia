import React, { Component } from 'react';
import ArtistCardInfo from '../ArtistCardInfoComponent/ArtistCardInfoComponent.jsx';

const ArtistCardComponent = (props) => {
  const { url, genre, name, link } = props;
  //opens spotify page for onclick
  const openSpotify = () => {
    window.open(link, '_blank');
  };
  return (
    <div className="flex carousel-item overflow-x">
      <div className="card card-compact h-80 w-80 bg-base-100 shadow-xl ">
        <figure>
          <img src={url} alt="Artists Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Genre: {genre}</p>
          <div className="card-actions justify-end">
            <button onClick={openSpotify} className="btn btn-primary">
              {name}'s Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCardComponent;
