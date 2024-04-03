import React, { createContext, useState } from 'react';

const UserContext = createContext();

const ContextProvider = ({ children }) => {
    const [Input, setInput] = useState('Harsh Dahiya')

  return (
    <UserContext.Provider value={{Input, setInput}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, ContextProvider };