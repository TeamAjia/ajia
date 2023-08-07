function generateRandomString(length) {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// const digest = await window.crypto.subtle.digest('SHA-256', data);

async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }
  console.log('hello');
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
}

function extractCode() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');
  let codeVerifier = localStorage.getItem('code_verifier');

  let body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://localhost:8080/home',
    client_id: 'f1ae3071e1544d8a9722e15b1dd38489',
    code_verifier: codeVerifier,
  });
  console.log(body);

  const response = fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('access_token', data.access_token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

module.exports = { generateRandomString, generateCodeChallenge, extractCode };
