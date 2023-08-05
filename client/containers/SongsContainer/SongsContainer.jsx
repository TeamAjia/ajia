import React from 'react';
import Card from '../../components/CardsComponent/Card.jsx';

const songArr = [
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-self-titled-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-fearless-2008-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-the-holiday-collection-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2020/12/taylor-swift-cover-2020-billboard-1240-1607612466.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/media/Taylor-Swift-Lover-album-art-2019-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-red-taylors-version-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-self-titled-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-fearless-2008-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-the-holiday-collection-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2020/12/taylor-swift-cover-2020-billboard-1240-1607612466.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/media/Taylor-Swift-Lover-album-art-2019-billboard-1240.jpg?w=200',
  },
  {
    url: 'https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-red-taylors-version-billboard-1240.jpg?w=200',
  },
];

const SongsContainer = () => {
  //Create all card components

  const songCards = songArr.map((el) => {
    return <Card url={el.url} />;
  });

  return (
    <div className="carousel carousel-center max-w-screen p-4 space-x-12 bg-neutral rounded-box">
      {songCards}
    </div>
  );
};

export default SongsContainer;
