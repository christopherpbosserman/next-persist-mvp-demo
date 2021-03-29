import '../styles/globals.css';
import Layout from '../components/Layout';

import React from 'react';
import App from 'next/app';

export default class MyApp extends App {
  static async getInitialProps() {
    const res = await fetch('https://fakestoreapi.com/products?limit=2');
    const data = await res.json();
    console.log('data', data);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      pageProps: data,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    console.log('this', pageProps);
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
