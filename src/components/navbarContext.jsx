import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <NavbarContext.Provider value={{ hamburger, toggleHamburger }}>
      {children}
    </NavbarContext.Provider>
  );
};
