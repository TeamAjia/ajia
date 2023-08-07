import React, { Component } from 'react';
import ArtistCardInfo from '../ArtistCardInfoComponent/ArtistCardInfoComponent.jsx';

const ArtistCardComponent = (props) => {
  const { url, num } = props;
  return (
    <div className='flex carousel-item overflow-x'>
      <p className='self-center top-0 left-0 text-9xl text-accent/90 rounded-box'>
        {num}
      </p>
      <label className='swap swap-flip'>
        <input type='checkbox' />
        <div className='swap-off'>
          <img src={url} className='rounded-box ring ring-accent' />
        </div>
        <ArtistCardInfo />
      </label>
    </div>
  );
};

export default ArtistCardComponent;
