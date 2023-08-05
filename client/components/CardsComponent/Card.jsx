import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div className="flex carousel-item">
      <p className="self-center top-0 left-0 text-9xl text-accent/90">1</p>
      <img src={props.url} className="rounded-box" />
    </div>
  );
};

export default Card;
