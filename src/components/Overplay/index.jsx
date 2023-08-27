import React from 'react';
import { useMainContext } from '../MainContext';
import { twMerge } from 'tailwind-merge';

const Overplay = ({ className }) => {
  const { controlSubscriptionMagazine, ToogleSubscriptionMagazine } =
    useMainContext();
  return (
    <div
      onClick={ToogleSubscriptionMagazine}
      className={twMerge(`${className ?? ''} overplay  ${
        controlSubscriptionMagazine
          ? 'visible opacity-100'
          : 'invisible opacity-0'
      } fixed left-0 top-0 z-[1000] h-full w-full bg-black-0 bg-opacity-60 
     transition-all duration-[400ms]`)}
    ></div>
  );
};

export default Overplay;
