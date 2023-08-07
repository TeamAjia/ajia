import React from 'react';

import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent.jsx';
import ProfileContainer from '../ProfileContainer/ProfileContainer.jsx';

const IntroContainer = (props) => {
  const { username } = props;
  return (
    <div className="flex content-end justify-between border border-black h-20">
      <WelcomeComponent username={username.display_name} />
      <ProfileContainer image={username.image} />
    </div>
  );
};

export default IntroContainer;
