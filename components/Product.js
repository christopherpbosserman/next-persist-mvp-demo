import React from 'react';

const Product = (product) => {
  // console.log('product:', product);
  return (
    <div>
      <h1>Product</h1>
      <img src={product.products.image} />
    </div>
  );
};

export default Product;
