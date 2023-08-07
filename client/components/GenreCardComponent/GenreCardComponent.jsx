import React, { Component } from 'react';

const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#E4F1EE', '#D9EDF8','#DEDAF4']

const GenreCardComponent = (props) => {
  const { url, num } = props;

  
  return (
    <div className='flex carousel-item overflow-x'>
      <p className='self-center top-0 left-0 text-9xl text-accent/90 rounded-box'>
        {num}
      </p>
    </div>
  );
};

export default GenreCardComponent;
