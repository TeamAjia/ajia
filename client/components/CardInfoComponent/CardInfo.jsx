import React, { Component } from 'react';

const CardInfo = (props) => {
  const { name, duration, artist, album, link } = props;

  function mtoS(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <div className="flex flex-col w-64 h-64 flex-wrap swap-on bg-black rounded-box ring ring-primary font-mono text-small justify-center content-center">
      <p className="p-2 text-white ">Song: {name.slice(0, 30)}</p>
      <p className="p-2 text-white">Duration: {mtoS(duration)} </p>
      <p className="p-2 text-white">Artist: {artist}</p>
      <p className="p-2 text-white">Album: {album.slice(0, 20) + '...'}</p>
      <button className="self-center btn btn-primary max-w-fit">
        <a href={link}>Listen to Song!</a>
      </button>
    </div>
  );
};

export default CardInfo;
