// src/components/Globe.tsx
import React from 'react';
import Globe from 'react-globe.gl';
import { Artist, Point } from '../shared/interfaces'; // Adjust the import path as necessary


interface MyGlobeProps {
    artists: Artist[];
    onPointClick: (artist: Artist) => void;
}

const MyGlobe: React.FC<MyGlobeProps> = ({ artists, onPointClick }) => {

  const points = artists.map(artist => ({
    lat: artist.location.lat,
    long: artist.location.long,
    color: 'red',
    altitude: .1,
    radius: .5,
    artist: artist
  }));


    return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={points}
      pointLat="lat"
      pointLng="long"
      pointColor={() => 'red'}
      pointAltitude="altitude" // Use the 'altitude' property from the points data
      pointRadius="radius"
      onPointClick={(point: Point) => {
        onPointClick(point.artist);
      }}
    />
  );
};

export default MyGlobe;