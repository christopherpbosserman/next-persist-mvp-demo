import { createContext, useContext } from 'react';

const sharedState = {
  cart: [],
  favorites: [],
  cartTotal: 0,

  setSharedState: (location, product, add = true) => {
    if (add) {
      if (location !== 'cartTotal') {
        sharedState[location].push(product);
      } else {
        sharedState[location] += product.price;
        console.log('price in shared state: ', sharedState.cartTotal);
      }
    } else {
      const position = sharedState[location].indexOf(product);
      sharedState[location].splice(position, 1);
    }
  },
};

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

const AppContext = createContext(sharedState);

export function useAppContext() {
  return useContext(AppContext);
}
