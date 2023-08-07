import React, { Component } from 'react';
import CardInfo from '../CardInfoComponent/CardInfo.jsx';

const Card = (props) => {
  const { url, num, duration, arist, album, link, name } = props;
  return (
    <div className="flex carousel-item overflow-x">
      <p className="self-center top-0 left-0 text-9xl text-accent/90 rounded-box">
        {num}
      </p>
      <label className="swap swap-flip">
        <input type="checkbox" />
        <div className="swap-off">
          <img src={url} className="rounded-box ring ring-accent" />
        </div>
        <CardInfo
          duration={duration}
          name={name}
          link={link}
          artist={arist}
          album={album}
        />
      </label>
    </div>
  );
};

export default Card;
