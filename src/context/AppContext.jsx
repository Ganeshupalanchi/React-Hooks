import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  
  const phone = "+91 1234567890";
  const name = "Ganesh Uplanchi"; 
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
