import React, { useEffect } from 'react';
import { extractCode } from '../../helpers/helpers.js';
import { Navigate } from 'react-router-dom';

const OAuthContainer = () => {
  if (true) {
    extractCode();
    return <Navigate to='/loginCont' />;
  }
};

export default OAuthContainer;
