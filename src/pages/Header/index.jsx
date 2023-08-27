import Hamberger from '@/components/Hamberger';
import { motion } from 'framer-motion';
import React, { forwardRef, useRef } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import useHeader from './useHeader';
import { twMerge } from 'tailwind-merge';
import { useMainContext } from '@/components/MainContext';
import Banner from '@/components/Banner';
const Header = () => {
  const { ToogleSubscriptionMagazine } = useMainContext();
  const {
    headerMiddleProps,
    headerBottomProps,
    openNav,
    lastPosYNav,
    heightScroll,
    windowSize,
  } = useHeader();
  const icon = {
    hidden: {
      pathLength: 0,
      fill: '#000',
    },
    visible: {
      pathLength:
        windowSize.width >= 1024 && lastPosYNav > heightScroll ? 1 : 0,
      fill: (function () {
        if (windowSize.width >= 1024) {
          if (lastPosYNav > heightScroll) {
            return '#066D3B';
          } else {
            return '#000';
          }
        } else {
          return '#066D3B';
        }
      })(),
    },
  };
  return (
    <header className="header relative">
      <div
        className={twMerge(
          `nav__header left-1/2 -translate-x-1/2
          ${
            windowSize.width >= 1024 && !(lastPosYNav > heightScroll)
              ? 'invisible opacity-0'
              : 'visible opacity-100'
          }`
        )}
      >
        <div className="nav__header-inner ">
          <a className="p-[4px]" href="#">
            <svg
              className="xs:h-[40px] xs:w-[80px] md:h-[50px] md:w-[100px] lg:h-[60px] lg:w-[120px]"
              width="120"
              height="60"
              viewBox="0 0 203 115"
              fill="#066D3B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M23.8289 112.847L0.00976562 51.9023H16.7442L31.4897 91.4911L23.8289 112.847ZM23.4654 112.662L45.2682 51.9023H62.0095L38.691 112.662H23.4654Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M202.399 87.4142C202.399 102.633 191.913 114.077 175.652 114.077C159.39 114.077 149.014 102.633 149.014 87.4142V36.5674H164.575V51.9031H201.7V66.8888H164.575V87.8879C164.575 93.4346 168.005 98.9813 175.652 98.9813C183.429 98.9813 186.851 93.4346 186.851 87.8879V82.3412H202.406L202.399 87.4142Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M79.3344 51.9092H63.7715V112.669H79.3344V51.9092Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M63.6543 36.5675V47.2695H79.3338V36.5675C79.3338 36.4851 79.3338 36.4027 79.3338 36.3203H63.668C63.6612 36.4027 63.6543 36.4851 63.6543 36.5675Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M106.341 88.3613H144.652C147.244 64.0534 132.039 50.3721 114.242 50.3721C97.0342 50.3721 83.002 64.788 83.002 82.4577C83.002 99.5165 96.3895 113.527 113.055 114.166V109.395H116.814V114.104C130.435 113.184 140.132 104.981 143.472 93.3177H127.088C124.262 97.917 119.194 99.9215 114.002 99.9215C105.285 99.9215 98.0904 92.487 98.0904 82.4577C98.0904 72.3117 105.285 64.5271 114.002 64.5271C120.956 64.5271 126.971 68.543 129.09 75.3802H106.341V88.3613Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M17.3065 7.9957C18.2221 8.93945 18.9411 10.0561 19.4215 11.2805C19.9019 12.505 20.1342 13.8129 20.1048 15.1281V33.347H14.8306V15.0046C14.8306 12.0733 13.0337 10.2954 10.0296 10.2954C7.0256 10.2954 5.27668 12.0733 5.27668 15.0046V33.347H0.00247954V15.1281C-0.0269173 13.8129 0.20533 12.505 0.685736 11.2805C1.16614 10.0561 1.88512 8.93945 2.80077 7.9957C4.78028 6.18482 7.36503 5.18066 10.0468 5.18066C12.7286 5.18066 15.3133 6.18482 17.2928 7.9957H17.3065Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M48.9711 19.4877C48.9711 27.4851 43.2648 33.8281 35.4324 33.8281C27.5999 33.8281 21.8594 27.4851 21.8594 19.4877C21.8594 11.4903 27.5725 5.18164 35.4324 5.18164C43.2922 5.18164 48.9711 11.5246 48.9711 19.4877ZM43.6626 19.4877C43.6626 14.3735 39.9864 10.138 35.4324 10.138C30.8783 10.138 27.2021 14.3735 27.2021 19.4877C27.2021 24.6019 30.8783 28.8717 35.4324 28.8717C39.9864 28.8717 43.6626 24.6156 43.6626 19.4877Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M68.0574 7.9957C68.9719 8.94001 69.6896 10.0569 70.1688 11.2813C70.648 12.5058 70.8792 13.8134 70.8489 15.1281V33.347H65.5815V15.0046C65.5815 12.0733 63.7846 10.2954 60.7806 10.2954C57.7765 10.2954 56.0345 12.0733 56.0345 15.0046V33.347H50.7603V15.1281C50.7309 13.8129 50.9631 12.505 51.4435 11.2805C51.924 10.0561 52.6429 8.93945 53.5585 7.9957C55.538 6.18482 58.1228 5.18066 60.8046 5.18066C63.4863 5.18066 66.0711 6.18482 68.0506 7.9957H68.0574Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M72.6113 19.4879C72.6113 11.4424 78.5165 5.14062 86.0677 5.14062C92.2404 5.14062 96.8836 8.62789 98.6394 14.2981H92.9743C92.3582 12.988 91.3807 11.8815 90.157 11.1092C88.9333 10.3368 87.5144 9.93081 86.0677 9.93905C81.4725 9.93905 77.8787 14.2981 77.8787 19.4879C77.8787 24.6776 81.4725 29.0984 86.0677 29.0984C87.8422 29.0961 89.5624 28.4859 90.9423 27.3695C92.3223 26.253 93.2789 24.6975 93.6533 22.9614H86.7536V18.0874H99.4418C99.7642 27.7529 93.955 33.8763 86.0677 33.8763C78.5234 33.8282 72.6113 27.5264 72.6113 19.4879Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M129.865 10.7284H109.742V5.85449H129.865V10.7284ZM122.437 33.3819H117.17V12.829H122.417L122.437 33.3819Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M136.373 5.85449V33.3476H131.064V5.85449H136.373ZM151.51 33.3476H146.235V21.7394H138.451V16.8723H146.235V5.85449H151.51V33.3476Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M180.5 19.4877C180.5 27.4851 174.787 33.8281 166.962 33.8281C159.136 33.8281 153.389 27.4851 153.389 19.4877C153.389 11.4903 159.095 5.18164 166.962 5.18164C174.828 5.18164 180.5 11.5246 180.5 19.4877ZM175.185 19.4877C175.185 14.3735 171.516 10.138 166.955 10.138C162.394 10.138 158.725 14.3735 158.725 19.4877C158.725 24.6019 162.401 28.8717 166.955 28.8717C171.509 28.8717 175.185 24.6156 175.185 19.4877Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M199.58 7.9957C200.496 8.93945 201.215 10.0561 201.695 11.2805C202.175 12.505 202.408 13.8129 202.378 15.1281V33.347H197.104V15.0046C197.104 12.0733 195.314 10.2954 192.303 10.2954C189.292 10.2954 187.571 12.0733 187.571 15.0046V33.347H182.303V15.1281C182.273 13.8134 182.504 12.5058 182.984 11.2813C183.463 10.0569 184.18 8.94001 185.095 7.9957C187.074 6.18482 189.659 5.18066 192.341 5.18066C195.023 5.18066 197.607 6.18482 199.587 7.9957H199.58Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M33.7254 0.5H36.3386L39.48 3.89117L38.3894 4.70807L35.0903 1.921H34.9737L31.6746 4.70807L30.584 3.91863L33.7254 0.5Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M165.625 0.5H168.238L171.379 3.89117L170.289 4.6806L166.997 1.89353H166.88L163.567 4.70807L162.477 3.91863L165.625 0.5Z"
                fill="#066D3B"
              />
              <motion.path
                transition={{
                  default: {
                    duration: 2,
                    ease: 'easeInOut',
                  },
                  fill: {
                    duration: 2,
                    ease: [1, 0, 0.8, 1],
                  },
                }}
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M129.995 47.9075V48.3743H120.428L114.715 43.4798L108.995 48.3743H99.6465V47.7634L111.258 37.8096H118.199L129.995 47.9075Z"
                fill="#066D3B"
              />
            </svg>
          </a>
          <ul className=" relative h-full items-center gap-[14px] font-rm text-md xs:hidden lg:flex">
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]	">
              <a className="menulist__item-text before:hidden ">Nông nghiệp</a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute left-[0px] top-full flex min-h-full w-full min-w-[200px] translate-y-[10px]  flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum dolor.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]	">
              <a className="menulist__item-text before:hidden ">Doanh nghiệp</a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute left-[0px] top-full flex min-h-full w-full min-w-[200px] translate-y-[10px]  flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum dolor.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]">
              <a className="menulist__item-text before:hidden ">
                Phát triển bền vững
              </a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute left-[0px] top-full flex min-h-full w-full min-w-[200px] translate-y-[10px]  flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum dolor.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]">
              <a className="menulist__item-text before:hidden ">Nhân vật</a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute left-[0px] top-full flex min-h-full w-full min-w-[200px] translate-y-[10px]  flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum dolor.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]">
              <a className="menulist__item-text before:hidden ">
                Nông thôn mới
              </a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute left-[0px] top-full flex min-h-full w-full min-w-[200px] translate-y-[10px]  flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum dolor.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
            <li className="group/nav group/text menulist__item flex items-center gap-[4px] text-[14.5px]">
              <a className="menulist__item-text before:hidden ">Đối thoại</a>
              <svg
                className="transition-colors duration-200 group-hover/nav:fill-green-06"
                fill="#000000"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
              <div
                className="invisible absolute right-1  top-full flex min-h-full w-full min-w-[200px] translate-y-[10px] flex-col 
                gap-[10px] border-t-[2px] border-t-green-06 bg-grey-d9 opacity-0 transition-[all] 
                 duration-200 group-hover/nav:visible group-hover/nav:translate-y-[0px]
                group-hover/nav:opacity-100 
                "
              >
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[5px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
                <div className="min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Lorem, ipsum.
                  </a>
                </div>
                <div className="h-full min-h-[30px]">
                  <a
                    href="#"
                    className=" block min-h-[30px] bg-grey-d9 px-[10px] py-[2px] font-rr hover:bg-grey-c4"
                  >
                    Xem tất cả
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="absolute left-1/2 -translate-x-1/2 xs:hidden xs:gap-4  sm:gap-6 md:flex lg:hidden">
            <div className=" group/active flex items-center gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#000000"
                className="group-hover/active:fill-green-06 group-active/active:fill-green-06"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z" />
                <circle cx="6.5" cy="6.5" r="1.5" />
              </svg>{' '}
              <a
                href="tel:+0932056666"
                className="font-rb text-sm group-hover/active:text-green-06 group-active/active:text-green-06 "
              >
                Liên hệ quảng cáo
              </a>
            </div>
            <div
              onClick={ToogleSubscriptionMagazine}
              className="group/active flex items-center gap-[6px]"
            >
              <svg
                className="group-hover/active:fill-green-06 group-active/active:fill-green-06"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
              <p className="font-rb text-sm group-hover/active:text-green-06 group-active/active:text-green-06 ">
                Đặt báo
              </p>
            </div>
          </div>
          <div className="xs:flex lg:hidden">
            <Hamberger />
          </div>
        </div>
      </div>
      <div className="container">
        <Banner
          className={`bg-banner md:h-[120px] lg:h-[160px] xl:h-[240px] `}
        />
        <span className="horizontal-line-page  md:my-[14px] md:block lg:my-[32px] "></span>
      </div>
      <div className="pt h-[1px] w-full xs:hidden md:block"></div>
      <div className=" container lg:h-[140px] xl:h-[var(--height-header-top)]">
        <HeaderTop />
      </div>
      <HeaderMiddle {...headerMiddleProps} />
      <div className="container ">
        <HeaderBottom {...headerBottomProps} />
      </div>
    </header>
  );
};

export default Header;
