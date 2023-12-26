// src/components/Globe.tsx
import React from 'react';
import Globe from 'react-globe.gl';

const MyGlobe = ({ }) => {
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointLat="latitude"
      pointLng="longitude"
      pointColor={() => 'gold'}
    />
  );
};

export default MyGlobe;