import React from 'react';

const WelcomeComponent = (props) => {
  const { display_name } = props;
  return <h1 className="h-min">Welcome, {display_name}</h1>;
};

export default WelcomeComponent;
