import React from 'react';
import GenreCardComponent from '../../components/GenreCardComponent/GenreCardComponent.jsx';

const GenreContainer = (props) => {
  const genreCards = songArr.map((el, idx) => {
    return <GenreCardComponent url={el.url} num={idx + 1} />;
  });

  return (
    <div className='carousel carousel-center max-w-full p-4 space-x-8 bg-neutral rounded-box scroll-smooth'>
      {genreCards}
    </div>
  );
};

export default GenreContainer;
