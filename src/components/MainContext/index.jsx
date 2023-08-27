import React, { createContext, useContext, useState } from 'react';
const MainContext = createContext({});
export const MainProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const [controlHamberger, setControlHamberger] = useState(true);
  const [controlSubscriptionMagazine, setControlSubscriptionMagazine] =
    useState(false);
  const onBacktotop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const onOpenNav = () => {
    setOpenNav(!openNav);
    setControlHamberger(!controlHamberger);
  };
  const ToogleSubscriptionMagazine = () => {
    setControlSubscriptionMagazine(!controlSubscriptionMagazine);
  };
  return (
    <MainContext.Provider
      value={{
        openNav,
        onOpenNav,
        controlHamberger,
        ToogleSubscriptionMagazine,
        controlSubscriptionMagazine,
        setControlSubscriptionMagazine,
        onBacktotop,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
