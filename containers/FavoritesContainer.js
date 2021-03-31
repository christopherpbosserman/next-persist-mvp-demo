import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';
import styles from '../styles/Favorites.module.css';

function FavoritesContainer() {
  let sharedState = useAppContext();

  const favorites = sharedState.favorites.map((product, i) => {
    return <Product product={product} key={`product${i}`} />;
  });

  return (
    <div className={styles.favoritesContainer}>
      <h1>Your Favorited Items</h1>
      <div className={styles.productsContainer}>{favorites}</div>
    </div>
  );
}

export default FavoritesContainer;
