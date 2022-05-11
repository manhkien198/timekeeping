import React, { useContext, useState } from 'react';
const Context = React.createContext();

function AppProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
export const useGlobalContext = () => {
  return useContext(Context);
};
export default AppProvider;
