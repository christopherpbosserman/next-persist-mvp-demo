import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';
import Link from 'next/link';

const containerStyles = {
  display: 'flex',
  jiustifyntent: 'center',
  alignItems: 'center',
  width: '30rem',
};

function CartContainer() {
  const sharedState = useAppContext();
  console.log('CartContainer', sharedState.cart);

  const cart = sharedState.cart.map((product) => {
    return (
      <div>
        <h3>{product.title}</h3>
        <Product product={product} />
        <p>${product.price}</p>
      </div>
    );
  });

  const cartTotal = sharedState.cartTotal;

  return (
    <div className="container" style={containerStyles}>
      {cart}
      <Link href={'/Shop'}>
        <button>Continue Shopping</button>
      </Link>
      <button>Checkout</button>
      <p>Fuck your total: ${cartTotal}</p>
    </div>
  );
}

export default CartContainer;
