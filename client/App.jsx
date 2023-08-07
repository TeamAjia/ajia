import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer.jsx';
import LoginContainer from './containers/LogInContainer/LogInContainer.jsx';
import OAuthContainer from './containers/OAuthContainer/OAuth.jsx';
import OAuthContContainer from './containers/OAuthCont/OAuthCont.jsx';
import GiveUpContainer from './containers/GiveUpContainer/GiveUpContainer.jsx';

const App = (prop) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<MainContainer />} />
        <Route path="/login" element={<OAuthContainer />} />
        <Route path="/loginCont" element={<OAuthContContainer />} />
        <Route path="/giveUp" element={<GiveUpContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
