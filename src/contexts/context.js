import { createContext, useContext, useState } from "react";
import P from "prop-types";
import { useEffect } from "react";

export const PortContext = createContext();

export const PortProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [width]);

  const portObject = {
    menu,
    setMenu,
    width,
  };

  return (
    <PortContext.Provider value={portObject}>{children}</PortContext.Provider>
  );
};

export const usePortContext = () => {
  const context = useContext(PortContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider"
    );
  }
  return context;
};

PortProvider.propTypes = {
  children: P.node.isRequired,
};
