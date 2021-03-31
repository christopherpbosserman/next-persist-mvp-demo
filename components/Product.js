import React from 'react';
import Link from 'next/link';
import styles from '../styles/Product.module.css';

const Product = ({ product }) => {
  console.log('Product:', product.title.split(' ').slice(0, 3).join(' '));

  return (
    <div className={styles.productContainer}>
      <Link href={`/product/${product.id}`}>
        <img src={product.image} className={styles.product} />
      </Link>
      <div className={styles.info}>
        <p className={styles.price}>${Number(product.price).toFixed(2)}</p>
        <p className={styles.title}>
          {product.title.split(' ').slice(0, 3).join(' ')}
        </p>
      </div>
    </div>
  );
};

export default Product;
