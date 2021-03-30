import React, { Component } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import { useAppContext } from '../context/state';

const Layout = (props) => {
  const sharedState = useAppContext();
  return (
    <div className={styles.container}>
      <h1 className={styles.banner}>mostJS</h1>
      <div className={styles.layoutContainer}>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/Shop">Shop</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/Favorites">Favorites</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/About">About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                <text
                  x="5.19"
                  y="13.5"
                  fontSize="10"
                  fill="black"
                  stroke="black"
                  strokeWidth=".06"
                >
                  {sharedState.cart.length}
                </text>
              </svg>
            </Link>
          </li>
        </ul>
        <Link href="/">
          <img
            className={styles.logoImg}
            alt="rocklogo"
            src="/assets/logoImg.png
          "
          ></img>
        </Link>
      </div>
      <div className={styles.product}>{props.children}</div>
    </div>
  );
};

export default Layout;
