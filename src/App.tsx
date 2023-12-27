import React, { useState } from 'react';
import MyGlobe from './components/Globe'; // Import the Globe component
import ArtistModal from './components/ArtistModal'; // Assuming you have this component
import artistsData from './data/artists.json';
import { Artist } from './shared/interfaces'; // Import the Artist interface

function App() {

  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleArtistSelect = (artist: Artist) => {
    setSelectedArtist(artist);
  };
  
  return (
    <div className="App">
      <h1>Welcome to the Tattoo Artist Map</h1>
      <MyGlobe artists={artistsData} onPointClick={handleArtistSelect} /> {/* This line renders the Globe component */}
      {selectedArtist && <ArtistModal artist={selectedArtist} />}
    </div>
  );
}

export default App;