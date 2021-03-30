import React from 'react';
import Product from '../components/Product';

function Shop({ data }) {
  // const products = data.map((product) => {
  //   <Product products={product} />;
  //   // console.log('product: ', product);
  // });fjaLLRAVEN

  const products = [];

  for (let i = 0; i < data.length; i++) {
    products.push(<Product product={data[i]} key={i} />);
  }

  return <div>{products}</div>;
}

export const getStaticProps = async () => {
  // fetch from
  const res = await fetch('https://fakestoreapi.com/products?limit=6');
  const data = await res.json();
  // console.log('getStaticProps', data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch('https://fakestoreapi.com/products?limit=6');
//   const data = await res.json();

//   const ids = data.map((product) => product.id);
//   const paths = ids.map((id) => {
//     params: {
//       id: id.toString();
//     }
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Shop;
