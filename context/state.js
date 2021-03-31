import { createContext, useContext } from 'react';
import { getStorage, writeStorage } from '../lib/next-persist';

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
    writeStorage(sharedState);
  },
};

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

const nextPersistConfig = {
  allowList: ['cart', 'favorites', 'cartTotal'],
};

let AppContext = createContext(getStorage(nextPersistConfig, sharedState));

export function useAppContext() {
  AppContext = createContext(getStorage(nextPersistConfig, sharedState));
  const newContext = useContext(AppContext);
  console.log('newContext', newContext);
  return newContext;
}
