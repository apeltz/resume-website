import React from 'react';
import './App.css';
import { Resume } from './pages/resume'
import avatar from './assets/ap_avatar.jpg';

function App() {
  return (
    <div className="App">
      <img src={avatar} alt="avatar" />
      <Resume />
    </div>
  );
}

export default App;
