import React, { useEffect } from 'react';
import { extractCode } from '../../helpers/helpers.js';
import { Navigate } from 'react-router-dom';

const OAuthContContainer = () => {
  if (true) {
    if (localStorage.getItem('access_token')) {
      return <Navigate to="/home" />;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default OAuthContContainer;
