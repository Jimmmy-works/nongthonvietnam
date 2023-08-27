import React from 'react';
import { useMainContext } from '../MainContext';

const Backtotop = () => {
  const {
    onBacktotop,
    controlSubscriptionMagazine,
    ToogleSubscriptionMagazine,
  } = useMainContext();

  return (
    <div className="backtotop fixed bottom-[60px] right-[20px] ">
      <div className="bg-grey-faf8 flex flex-col items-center rounded-b-[80px] rounded-t-[80px]">
        <a
          href=""
          className="rounded-t-[80px] border-b border-b-grey-d9 px-[10px] py-[15px] transition-colors duration-300 
          hover:bg-green-06 hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
          </svg>
        </a>
        <div
          onClick={ToogleSubscriptionMagazine}
          className="cursor-pointer  border-b border-b-grey-d9 p-[10px] transition-colors duration-300 
          hover:bg-green-06 hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 26 26"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
          </svg>
        </div>
        <div
          onClick={onBacktotop}
          className="cursor-pointer rounded-b-[80px] p-[10px] transition-colors duration-300 
          hover:bg-green-06 hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M5.71,9.7L5.71,9.7c0.39,0.39,1.02,0.39,1.41,0L11,5.83V21c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5.83l3.88,3.88 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L12.7,2.7c-0.39-0.39-1.02-0.39-1.41,0L5.71,8.29 C5.32,8.68,5.32,9.32,5.71,9.7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Backtotop;
