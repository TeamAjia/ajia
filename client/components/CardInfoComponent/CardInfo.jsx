import React, { Component } from 'react';

const CardInfo = (props) => {
  return (
    <div className="flex flex-col flex-wrap-R swap-on bg-black rounded-box ring ring-accent font-mono text-sm ">
      <p className="p-2 text-white flex flex-wrap">Song Title:</p>
      <p className="p-2 text-white">Duration: </p>
      <p className="p-2 text-white">Artist: </p>
      <p className="p-2 text-white">Album: </p>
      <p className="p-2 text-white">Sample: </p>
    </div>
  );
};

export default CardInfo;
