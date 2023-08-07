import React from 'react';

const WelcomeComponent = (props) => {
  const { username } = props;
  return (
    <h1 className="self-center h-min font-mono text-3xl">
      Welcome, {username}!
    </h1>
  );
};

export default WelcomeComponent;
