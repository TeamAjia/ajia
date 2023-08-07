import React, { Component } from 'react';
import CardInfo from '../CardInfoComponent/CardInfo.jsx';

const Card = (props) => {
  const { url, num, duration, artist, album, link, name } = props;
  return (
    <div className="flex carousel-item overflow-x ">
      <p className="self-center top-0 left-0 text-9xl text-primary/90 rounded-box">
        {num}
      </p>
      <label className="swap swap-flip">
        <input type="checkbox" />
        <div className="swap-off">
          <img
            src={url}
            className="rounded-box ring ring-primary w-64 h-64 shadow-2xl"
          />
        </div>
        <CardInfo
          duration={duration}
          name={name}
          link={link}
          artist={artist}
          album={album}
        />
      </label>
    </div>
  );
};

export default Card;
