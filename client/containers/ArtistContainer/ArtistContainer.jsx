import React from 'react';
import ArtistCardComponent from '../../components/ArtistCardComponent/ArtistCardComponent.jsx';

const ArtistContainer = (props) => {
  const { topArtists } = props;
  const artistCards = topArtists.map((el, idx) => {
    return (
      <ArtistCardComponent
        url={el.image}
        genre={el.genre}
        name={el.name}
        num={idx + 1}
        link={el.link}
        key={'Artist' + idx}
      />
    );
  });

  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-8 bg-neutral rounded-box scroll-smooth">
      {artistCards}
    </div>
  );
};

export default ArtistContainer;
