import React, { Component } from 'react';
import Link from 'next/link';

const layoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '-100px',
};

const navbarStyle = {
  border: '4px solid peach',
  fontSize: '2rem',
  backgroundColor: 'lightgrey',
  padding: '100px 30px',
  marginTop: 'none',
};

const bannerStyle = {
  margin: '180px 0 0 0',
  fontSize: '10rem',
  zIndex: '2',
};

const homeButtonStyle = {
  marginLeft: '129px',
};

const Layout = (props) => (
  <div>
    <div className="page-layout" style={layoutStyle}>
      <ul className="navbar" style={navbarStyle}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Shop">Shop</Link>
        </li>
        <li>
          <Link href="/Favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Cart">Cart</Link>
        </li>
      </ul>
      <h1 className="banner" style={bannerStyle}>
        moistJS
      </h1>
      <Link href="/">
        <img
          className="homeButton"
          style={homeButtonStyle}
          alt="rocklogo"
          src="/assets/rock.png"
          width="64"
          height="64"
        ></img>
      </Link>
    </div>
    <>{props.children}</>
  </div>
);

export default Layout;
