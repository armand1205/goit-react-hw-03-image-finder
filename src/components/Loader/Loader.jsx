import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

export default function Loader() {
  return (
    <BeatLoader
      color="#58bde0"
      size={30}
      aria-label="Beat Loader"
      data-testid="loader"
    />
  );
}
