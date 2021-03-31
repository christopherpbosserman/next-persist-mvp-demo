import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';

function CartContainer() {
  const sharedState = useAppContext();
  console.log('CartContainer', sharedState.cart);

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
          <p>${product.price}</p>
        </div>
      </div>
    );
  });

  const cartTotal = sharedState.cartTotal;

  return (
    <div className={styles.cartContainer}>
      <div>{cart}</div>
      <div className={styles.cartButtons}>
        <div className={styles.cartButton}>
          <Link href={'/Shop'}>
            <button>Continue Shopping</button>
          </Link>
        </div>

        <div className={styles.cartButton}>
          <div className={styles.subTotal}>
            <button>Checkout</button>
          </div>
          <p>Subtotal: ${cartTotal}</p>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
