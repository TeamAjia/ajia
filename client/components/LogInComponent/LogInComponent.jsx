import React, { Component } from 'react';
import {
  generateRandomString,
  generateCodeChallenge,
} from '../../helpers/helpers';

const LoginComponent = (prop) => {
  const handleAuth = async (e) => {
    console.log('authconroller');
    const clientId = 'f1ae3071e1544d8a9722e15b1dd38489';
    const redirectUri = 'http://localhost:8080/home';

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = generateRandomString(16);
      let scope = 'user-read-private user-read-email user-top-read';

      localStorage.setItem('code_verifier', codeVerifier);

      let args = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
      });

      window.location = 'https://accounts.spotify.com/authorize?' + args;
    });
  };

  return (
    <div className='flex flex-col h-screen flex-row items-center justify-center'>
      <button
        onClick={(e) => handleAuth(e)}
        className='btn btn-outline btn-success'
      >
        Login With Spotify
      </button>
    </div>
  );
};

export default LoginComponent;
