import React from 'react';
import styles from './Loader.module.css';
import BounceLoader from 'react-spinners/BounceLoader';

export default function Loader() {
  return (
    <BounceLoader
      color="#58bde0"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
