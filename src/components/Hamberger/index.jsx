import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMainContext } from '../MainContext';
const Hamberger = ({ className }) => {
  const { openNav, onOpenNav } = useMainContext();
  return (
    <button
      onClick={onOpenNav}
      className={`${
        className ?? ''
      } size c-hamburger c-hamburger--criss-cross   ${openNav ? 'active' : ''}`}
      type="button"
    >
      <div className="c-hamburger-inner">
        <span className={`c-hamburger-bar `}></span>
        <span className="c-hamburger-bar"></span>
        <span className={`c-hamburger-bar `}></span>
      </div>
    </button>
  );
};

export default Hamberger;
