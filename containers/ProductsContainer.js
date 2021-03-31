import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';
import styles from '../styles/Favorites.module.css';

function ProductsContainer({ products }) {
  const prods = products.map((product, i) => {
    return <Product product={product} key={i} />;
  });

  return (
    <div className={styles.favoritesContainer}>
      <h1>Our Shop</h1>
      <div className={styles.productsContainer}>{prods}</div>
    </div>
  );
}

export default ProductsContainer;
