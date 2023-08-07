import React from 'react';

import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent.jsx';
import ProfileContainer from '../ProfileContainer/ProfileContainer.jsx';

const IntroContainer = (props) => {
  const { username } = props;
  return (
    <>
      <div className='flex justify-between'>
        <WelcomeComponent username={username.display_name} />
        <ProfileContainer image={username.image} />
      </div>
      <div className='divider'></div>
    </>
  );
};

export default IntroContainer;
