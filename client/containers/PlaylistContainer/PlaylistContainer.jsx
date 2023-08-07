import React from 'react';
import PlaylistComponent from '../../components/PlaylistComponent/PlaylistComponent.jsx';

const PlaylistContainer = (props) => {
  const { playlists } = props;
  const playlistCards = playlists.map((el, idx) => {
    return (
      <PlaylistComponent
        url={el.image}
        name={el.name}
        num={idx + 1}
        link={el.link}
        desc={el.description}
        key={'Playlists' + idx}
      />
    );
  });

  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-8 bg-neutral rounded-box scroll-smooth">
      {playlistCards}
    </div>
  );
};

export default PlaylistContainer;
