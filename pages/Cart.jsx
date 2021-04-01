import React from 'react';
import CartContainer from '../containers/CartContainer';
import styles from '../styles/Cart.module.css';

function Cart() {
  return (
    <div className={styles.cartDetailsContainer}>
      <div className={styles.cartDetails}>
        <div className={styles.cartDetailsText}>
          <div className={styles.headerStyleContainer}>
            <h2 className={styles.headerStyle}>SHOPPING BAG</h2>
          </div>
          <div className={styles.cartDescription}>
            <p className={styles.textStyle}>ITEM</p>
            <p className={styles.textStyle}>PRICE</p>
          </div>
        </div>
      </div>
      <CartContainer />
    </div>
    )
}

export default Cart;
