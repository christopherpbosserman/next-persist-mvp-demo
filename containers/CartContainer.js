import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';
import CartRow from '../components/CartRow';

function CartContainer() {
  const sharedState = useAppContext();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  let subTotal = 0;

  const cart = sharedState.cart.map((product, i) => {
    subTotal += product.price;
    return <CartRow product={product} key={`product${i}`} />;
  });

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
          <p className={styles.cartItem}>
            Subtotal: ${Number(subTotal).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
