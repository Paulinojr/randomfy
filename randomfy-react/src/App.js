import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import  TracksSlider  from './components/TracksSlider/TracksSlider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TracksSlider></TracksSlider>
    </div>
  );
}

export default App;
