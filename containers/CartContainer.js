import React from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';

function CartContainer() {
  const sharedState = useAppContext();

  const cart = sharedState.cart.map((product, i) => {
    return (
      <div className={styles.cartItems} key={i}>
        <div className={styles.cartItem}>
          <Link href={`/product/${product.id}`}>
            <img src={product.image} height="100px" width="100px" />
          </Link>
        </div>
        <div className={styles.cartItem}>
          <h4>{product.title}</h4>
        </div>
        <div className={styles.cartItem}>
          <p>${Number(product.price).toFixed(2)}</p>
        </div>
      </div>
    );
  });

  const { cartTotal } = sharedState;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>{cart}</div>
      <div className={styles.cartButtons}>
        <div className={styles.cartButton}>
          <Link href={'/Shop'}>
            <button className={styles.buttons}>Continue Shopping</button>
          </Link>
        </div>

        <div className={styles.cartButton}>
          <div className={styles.subTotal}>
            <button className={styles.buttons}>Checkout</button>
          </div>
          <p>Subtotal: ${Number(cartTotal).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
