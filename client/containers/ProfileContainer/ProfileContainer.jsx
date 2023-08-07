import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const ProfileContainer = (props) => {
  const { image } = props;
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src={image} />
        </div>
      </label>
      <ul
        tabIndex='0'
        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-black rounded-box w-52'
      >
        <li>
          <a href='/giveUp' className='justify-between'>
            Delete Account
          </a>
        </li>
        <li>
          <a onClick={logOut} href='/'>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileContainer;
