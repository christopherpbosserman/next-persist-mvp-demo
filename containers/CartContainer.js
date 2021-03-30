import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';

const containerStyles = {
  display: 'flex',
  jiustifyntent: 'center',
  alignItems: 'center',
  width: '30rem',
};

function CartContainer({ state }) {
  const sharedState = useAppContext();
  console.log('CartContainer', sharedState.cart);

  const cart = sharedState.cart.map((product) => {
    return <Product product={product} />;
  });

  return (
    <div className="container" style={containerStyles}>
      {cart}
    </div>
  );
}

export default CartContainer;
