// src/components/Globe.tsx
import React from 'react';
import Globe from 'react-globe.gl';
import { Artist } from '../shared/interfaces'; // Adjust the import path as necessary


interface MyGlobeProps {
    artists: Artist[];
}

const MyGlobe: React.FC<MyGlobeProps> = ({ artists }) => {

  console.log("Artists Data:", artists); // Debug: Log the artists data

  const points = artists.map(artist => ({
    lat: artist.location.lat,
    long: artist.location.long,
    color: 'red',
    altitude: .1,
    radius: .5,
  }));

  console.log("Points Data:", points); // Debug: Log the points data


//   const onPointClick = (point) => {
//     if (point.artist) {
//         onArtistSelect(point.artist);
//     }
//   }

    return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={points}
      pointLat="lat"
      pointLng="long"
      pointColor={() => 'red'}
      pointAltitude="altitude" // Use the 'altitude' property from the points data
      pointRadius="radius"
    //   onPointClick={onPointClick}
    />
  );
};

export default MyGlobe;