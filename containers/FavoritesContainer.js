import React from 'react';
import Product from '../components/Product';
import { useAppContext } from '../context/state';

const containerStyles = {
  display: 'flex',
  jiustifyntent: 'center',
  alignItems: 'center',
  width: '30rem',
};

const favesContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: 0,
};

const favoritesStyles = {
  border: '3px solid red',
  width: '10rem',
  height: '16rem',
};

function FavoritesContainer({ state }) {
  const sharedState = useAppContext();
  console.log('FavoritesContainer', sharedState.favorites);

  const favorites = sharedState.favorites.map((product) => {
    return <Product product={product} />;
  });

  // console.log('FavoritesContainer: ', state[0]);
  return (
    <div className="container" style={containerStyles}>
      {favorites}
      {/* <ul className="favorites-container" style={favesContainerStyles}>
        <li className="fav" style={favoritesStyles}>
          Favorite 1
          <Product product={state[0]} />
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 2
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
      </ul> */}
    </div>
  );
}

export default FavoritesContainer;
