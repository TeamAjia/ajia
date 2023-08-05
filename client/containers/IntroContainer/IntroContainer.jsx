import React from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent.jsx';

const IntroContainer = (props) => {
  return (
    <div className="flex content-end border border-black h-20">
      <WelcomeComponent />
    </div>
  );
};

export default IntroContainer;
