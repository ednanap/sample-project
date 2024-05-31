import React, { createContext, useContext, useReducer } from 'react';

const ClientContext = createContext(null);

const clientReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLIENTS':
      return { ...state, clients: action.payload };
    default:
      return state;
  }
};

export const ClientProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clientReducer, { clients: [] });

  return (
    <ClientContext.Provider value={{ state, dispatch }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
