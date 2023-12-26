import React from 'react';

const ArtistModal = ({ artist }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', position: 'absolute', top: '20%', left: '20%', backgroundColor: 'white', zIndex: 100 }}>
      <h2>{artist.name}</h2>
      {/* Display other artist details here */}
      {/* You can add a close button or functionality here */}
    </div>
  );
};

export default ArtistModal;