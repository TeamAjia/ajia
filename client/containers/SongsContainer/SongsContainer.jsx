import React from 'react';
import Card from '../../components/CardsComponent/Card.jsx';

const SongsContainer = (props) => {
  const { topSongs } = props;

  const songCards = topSongs.map((el, idx) => {
    return (
      <Card
        url={el.image}
        name={el.name}
        duration={el.duration}
        album={el.album}
        aritst={el.artist}
        link={el.link}
        num={idx + 1}
        key={'Song' + idx}
      />
    );
  });

  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-8 bg-neutral rounded-box scroll-smooth">
      {songCards}
    </div>
  );
};

export default SongsContainer;
