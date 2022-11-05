import { createContext, useContext } from 'react';
import P from 'prop-types';

export const PortContext = createContext();

export const PortProvider = ({ children }) => {
  const portObject = {};

  return (
    <PortContext.Provider value={portObject}>{children}</PortContext.Provider>
  );
};

export const usePokeContext = () => {
  const context = useContext(PortContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

PortProvider.propTypes = {
  children: P.node.isRequired,
};
