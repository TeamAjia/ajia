import React from 'react';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent.jsx';

const ProfileContainer = (props) => {
  const { image } = props;
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={image} />
      </div>
    </div>
  );
};

export default ProfileContainer;
