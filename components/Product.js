import React from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';

const Product = ({ product }) => {
  console.log('Product:', product);

  return (
    <div>
      <h1>Product</h1>
      <Link href={`/product/${product.id}`}>
        <img src={product.image} height="200px" width="200px" />
      </Link>
    </div>
  );
};

export default Product;
