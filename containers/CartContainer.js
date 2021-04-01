import React from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';
import CartRow from '../components/CartRow';

function CartContainer() {
  const sharedState = useAppContext();

  const cart = sharedState.cart.map((product, i) => {
    return <CartRow product={product} key={`product${i}`}/>;
  });

  const { cartTotal } = sharedState;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>{cart}</div>
      <div className={styles.cartButtons}>
        <div className={styles.cartButton}>
          <Link href={'/Shop'}>
            <button className={styles.buttons}>CONTINUE SHOPPING</button>
          </Link>
        </div>

        <div className={styles.cartButton}>
          <div className={styles.subTotal}>
            <button className={styles.buttons}>CHECKOUT</button>
          </div>
          <p className={styles.cartItem}>Subtotal: ${Number(cartTotal).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
