import { createContext, useContext, useEffect, useState } from 'react';
// import { getStorage, writeStorage } from 'next-persist';
import { getStorage, writeStorage } from '../lib/next-persist';

const nextPersistConfig = {
  key: 'mostjs',
  allowList: ['cart', 'favorites'],
};

let sharedState = {
  cart: [],
  favorites: [],

  setSharedState: (location, product, add = true) => {
    if (add) {
      sharedState[location].push(product);
    } else {
      const position = sharedState[location].indexOf(product);
      sharedState[location].splice(position, 1);
    }
    writeStorage(nextPersistConfig, sharedState);
  },
};

const persistedStorage = getStorage(nextPersistConfig, sharedState);

let AppContext = createContext(persistedStorage);

export function AppWrapper({ children }) {
  useEffect(() => {
    sharedState = persistedStorage;
  });

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  AppContext = createContext(persistedStorage);
  return useContext(AppContext);
}
