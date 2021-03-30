import { createContext, useContext } from 'react';

const sharedState = {
  cart: [],
  favorites: [],

  setSharedState: (location, product, add = true) => {
    if (add) sharedState[location].push(product);
    else {
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
