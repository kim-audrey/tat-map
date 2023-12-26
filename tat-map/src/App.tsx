import React from 'react';
import Globe from './components/Globe'; // Import the Globe component
import ArtistModal from './components/ArtistModal'; // Assuming you have this component
import artistsData from './data/artists.json';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Tattoo Artist Map</h1>
      <Globe artists={artistsData} /> {/* This line renders the Globe component */}
    </div>
  );
}

export default App;