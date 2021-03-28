import React from 'react';

function Favorites() {
  return (
    <div className="container" style={containerStyles}>
      <ul className="favorites-container" style={favesContainerStyles}>
        <li className="fav" style={favoritesStyles}>
          Favorite 1
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 2
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 3
        </li>
      </ul>
    </div>
  );
}

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const favesContainerStyles = {
  display: 'grid',

  width: '25rem',
};

const favoritesStyles = {
  position: 'relative',
  border: '3px solid red',
  width: '5rem',
  height: '5rem',
};

export default Favorites;
