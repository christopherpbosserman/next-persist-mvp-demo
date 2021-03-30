import React from 'react';
import Product from '../components/Product';

function Shop({ data }) {
  const products = data.map((product, i) => {
    return <Product product={product} key={i} />;
  });

  return <div>{products}</div>;
}

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=6');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export default Shop;
