import { createContext, useContext } from 'react';

const sharedState = {
  cart: [
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: 'men clothing',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
  ],
  favorites: [
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: 'men clothing',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
  ],

  sharedStateFunction: () => {
    console.log('sharedStateFunction fired...');
    sharedState.updated = true;
    console.log(sharedState);
  },

  setSharedState: (location, product, add = true) => {
    if (add) sharedState[location].push(product);
    else {
      const position = sharedState[location].indexOf(product);
      sharedState[location].splice(position, 1);
    }
  },

  unSetSharedState: () => {},
};

const AppContext = createContext(sharedState);

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
