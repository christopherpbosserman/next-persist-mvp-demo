import React from 'react';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
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
          Favorite 4
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 5
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 6
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 7
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 8
        </li>
        <li className="fav" style={favoritesStyles}>
          Favorite 9
        </li>
      </ul>
    </div>
  );
}

export default Favorites;
