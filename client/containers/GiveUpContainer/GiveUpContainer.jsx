import React, { useEffect } from 'react';
import { extractCode } from '../../helpers/helpers.js';
import { Navigate } from 'react-router-dom';

const GiveUpContainer = () => {
  return (
    <div className="h-screen w-screen">
      <iframe
        className="mx-auto my-auto h-screen w-screen"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default GiveUpContainer;
