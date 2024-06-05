import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0);

  const incrementBasket = () => {
    setBasketCount(prevCount => prevCount + 1);
  };

  return (
    <BasketContext.Provider value={{ basketCount, incrementBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
