import React, { Component } from 'react';
import Link from 'next/link';

// const layoutStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginBottom: '-100px',
// };

// const navbarStyle = {
//   border: '4px solid peach',
//   fontSize: '2rem',
//   backgroundColor: 'lightgrey',
//   padding: '100px 30px',
//   marginTop: 'none',
// };

// const bannerStyle = {
//   margin: '180px 0 0 0',
//   fontSize: '10rem',
//   zIndex: '2',
// };

// const homeButtonStyle = {
//   marginLeft: '129px',
// };

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100vw',
};

const layoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const bannerStyle = {
  marginTop: '3rem',
  width: '50%',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  textAlign: 'center',
  fontSize: '100px',
  zIndex: '2',
};

const productStyles = {
  marginTop: '5rem',
};

const navbarStyle = {
  fontSize: '2rem',
  padding: '20px',
};

const homeButtonStyle = {
  margin: '50px',
  // marginLeft: '129px',
};

const navbarItemStyle = {
  padding: '5px',
  fontSize: '18px',
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
          src="/assets/rockLogo.png"
          width="64"
          height="64"
        ></img>
      </Link>
    </div>
    <>{props.children}</>
  </div>
);

export default Layout;
