import React from 'react';
import Product from '../components/Product';
import ProductsContainer from '../containers/ProductsContainer';

function Shop({ data }) {
  return <ProductsContainer products={data} />;
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
