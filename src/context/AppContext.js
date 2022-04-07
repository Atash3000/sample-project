import React, { createContext, useContext } from 'react';

const storeContext = createContext();
function AppContext({ children }) {
  const user = { name: 'John' };
  const value = { user };
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
}

export function useGetUser() {
  return useContext(storeContext);
}

export default AppContext;
