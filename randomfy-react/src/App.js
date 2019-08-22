import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { TracksSliderContainer } from './components/TracksSlider/TracksSlider.styled';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TracksSliderContainer></TracksSliderContainer>
    </div>
  );
}

export default App;
