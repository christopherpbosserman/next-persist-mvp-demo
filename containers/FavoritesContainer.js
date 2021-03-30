import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';

const containerStyles = {
  display: 'flex',
  jiustifyntent: 'center',
  alignItems: 'center',
  width: '30rem',
};

function FavoritesContainer() {
  const sharedState = useAppContext();

  const favorites = sharedState.favorites.map((product) => {
    return <Product product={product} />;
  });

  return (
    <div className="container" style={containerStyles}>
      {favorites}
    </div>
  );
}

export default FavoritesContainer;
