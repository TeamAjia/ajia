import React, { Component } from 'react';

const colors = [
  '#FFADAD',
  '#FFD6A5',
  '#FDFFB6',
  '#E4F1EE',
  '#D9EDF8',
  '#DEDAF4',
];

const PlaylistCardComponent = (props) => {
  const { url, desc, name, link } = props;
  //opens spotify page for onclick
  const openSpotify = () => {
    window.open(link, '_blank');
  };
  return (
    <div className="flex carousel-item overflow-x">
      <div className="card card-compact h-80 w-80 bg-base-100 shadow-xl ">
        <figure>
          <img src={url} alt="Playlist Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Playlist: {name}</p>
          <p>Description: {desc}</p>
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

export default PlaylistCardComponent;
