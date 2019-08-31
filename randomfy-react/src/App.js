import React from 'react';
import Header from './components/Header/Header';
import  TracksSlider  from './components/TracksSlider/TracksSlider';
import ArtistList from './components/ArtistList/ArtistList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <TracksSlider></TracksSlider>
      <ArtistList></ArtistList>
    </div>
  );
}

export default App;
