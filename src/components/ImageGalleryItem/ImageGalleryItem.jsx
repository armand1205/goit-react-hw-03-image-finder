import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image }) {
  return (
    <li className={styles.galleryItem}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
}
