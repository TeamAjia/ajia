import React, { Component } from 'react';

const CardInfo = (props) => {
  const { name, duration, artist, album, link } = props;

  return (
    <div className="flex flex-col w-64 h-64 flex-wrap swap-on bg-black rounded-box ring ring-primary font-mono text-small justify-center content-center">
      <p className="p-2 text-white flex flex-wrap">Song Title: {name}</p>
      <p className="p-2 text-white">Duration: {duration} </p>
      <p className="p-2 text-white">Artist: {artist}</p>
      <p className="p-2 text-white">Album: {album}</p>
      <button className="btn btn-primary">
        <a href={link}>Listen to Song!</a>
      </button>
    </div>
  );
};

export default CardInfo;
