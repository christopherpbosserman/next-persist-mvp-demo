import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';
import styles from '../styles/Favorites.module.css';

function FavoritesContainer() {
  let sharedState = useAppContext();
  // console.log('favoritesContainer', sharedState);

  // useEffect(() => {
  //   console.log('useEffect', sharedState);
  // }, [sharedState]);

  const favorites = sharedState.favorites.map((product, i) => {
    return <Product product={product} key={i} />;
  });

  return (
    <div className={styles.favoritesContainer}>
      <h1>Your Favorited Items</h1>
      <div className={styles.productsContainer}>{favorites}</div>
    </div>
  );
}

export default FavoritesContainer;
