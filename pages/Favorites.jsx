import React from 'react';
import FavoritesContainer from '../containers/FavoritesContainer';

function Favorites() {
  return (
    <div>
      <h1>Favorites go here.</h1>
      <FavoritesContainer />
      {/* render dynamically */}
    </div>
  );
}

// export const getStaticProps = (context) => {
//   // where 2 get faves from??????
//   return {
//     props: {
//       id: 2,
//       title: 'Mens Casual Premium Slim Fit T-Shirts ',
//       price: 22.3,
//       description:
//         'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//       category: 'men clothing',
//       image:
//         'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
//     },
//   };
// };

export default Favorites;
