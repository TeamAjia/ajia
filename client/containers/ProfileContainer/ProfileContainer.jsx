import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const ProfileContainer = (props) => {
  const { image } = props;
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={image} />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-black rounded-box w-52"
      >
        <li>
          <a href="/giveUp" class="justify-between">
            Delete Account
          </a>
        </li>
        <li>
          <a onClick={logOut} href="/">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileContainer;
