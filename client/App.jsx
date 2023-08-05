import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer.jsx';
import LoginContainer from './containers/LogInContainer/LogInContainer.jsx';

const App = (prop) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
