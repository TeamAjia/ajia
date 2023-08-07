import React, { Component } from 'react';

const CardInfo = (props) => {
  const { name, duration, artist, album, link } = props;

  return (
    <div className="flex flex-col flex-wrap-R swap-on bg-black rounded-box ring ring-accent font-mono text-sm ">
      <p className="p-2 text-white flex flex-wrap">Song Title: {name}</p>
      <p className="p-2 text-white">Duration: {duration} </p>
      <p className="p-2 text-white">Artist: {artist}</p>
      <p className="p-2 text-white">Album: {album}</p>
      <a href={link}>
        <p className="p-2 text-white">Link</p>
      </a>
    </div>
  );
};

export default CardInfo;
