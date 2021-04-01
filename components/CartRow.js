import React from 'react';
import styles from '../styles/Cart.module.css';
import Link from 'next/link';

const CartRow = ({ product }) => {
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItem}>
        <Link href={`/product/${product.id}`}>
          <img className={styles.cartImg} src={product.image} />
        </Link>
      </div>
      <div className={styles.cartItem}>
        <p>{product.title}</p>
      </div>
      <div className={styles.cartItem}>
        <p>${Number(product.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartRow;
