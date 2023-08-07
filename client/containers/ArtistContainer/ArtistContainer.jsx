import React from 'react';
import ArtistCardComponent from '../../components/ArtistCardComponent/ArtistCardComponent.jsx';


const ArtistContainer = (props) => {
  const artistCards = songArr.map((el, idx) => {
    return <ArtistCardComponent url={el.url} num={idx + 1} />;
  });

  return (
    <div className='carousel carousel-center max-w-full p-4 space-x-8 bg-neutral rounded-box scroll-smooth'>
      {genreCards}
    </div>
  );
};

export default ArtistContainer;
