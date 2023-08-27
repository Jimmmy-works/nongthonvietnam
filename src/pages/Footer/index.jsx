import { Button, Input } from '@mui/joy';
import React from 'react';
import useFooter from './useFooter';
import useQuery from '@/hooks/useQuery';
import newService from '@/service/newService';

const Footer = () => {
  const { data: dataCategories, loading: loadingCategories } = useQuery(
    newService.getCategories
  );
  console.log('dataCategories', dataCategories);
  return (
    <footer className="bg-[#E5E5E580] pt-[60px] xs:mt-[40px] md:mt-[80px] lg:mt-[130px]">
      <div className="container pb-[32px]">
        <div
          className="footer__top flex items-start xs:flex-wrap xs:justify-center xs:gap-y-[10px]  lg:flex-row lg:flex-nowrap
        lg:justify-normal lg:gap-0 "
        >
          <ul
            className="footer__top-list flex flex-col  items-start xs:min-w-[280px] xs:gap-[12px] lg:min-w-0 
          lg:gap-[6px] lg:border-r lg:border-r-black-0 lg:pl-[16px] lg:pr-[32px] "
          >
            {dataCategories?.slice(0, 4)?.map((item, index) => {
              return (
                <li
                  key={item?.id}
                  className=" group/hover w-full cursor-pointer  text-[13px] font-bold uppercase leading-[18px] text-black-0 xs:text-center lg:text-start 
                  "
                >
                  <a
                    className="tracking-[1px] transition-colors duration-300 group-hover/hover:text-green-06 "
                    href="#"
                  >
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className="footer__top-list flex flex-col  items-start xs:min-w-[280px] xs:gap-[12px] lg:min-w-0 
          lg:gap-[6px] lg:border-r lg:border-r-black-0 lg:pl-[16px] lg:pr-[32px] "
          >
            {dataCategories?.slice(4, 8)?.map((item, index) => {
              return (
                <li
                  key={item?.id}
                  className=" group/hover   w-full cursor-pointer  text-[13px] font-bold uppercase leading-[18px] text-black-0 
                  xs:text-center    lg:text-start 
             "
                >
                  <a
                    className="tracking-[1px] transition-colors duration-300 group-hover/hover:text-green-06 "
                    href="#"
                  >
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className="footer__top-list flex flex-col  items-start xs:min-w-[280px] xs:gap-[12px] lg:min-w-0 
          lg:gap-[6px] lg:border-r lg:border-r-black-0 lg:pl-[16px] lg:pr-[32px] "
          >
            {dataCategories?.slice(9, 13)?.map((item, index) => {
              return (
                <li
                  key={item?.id}
                  className=" group/hover   w-full cursor-pointer  text-[13px] font-bold uppercase leading-[18px]
                   text-black-0 xs:text-center  lg:text-start 
             "
                >
                  <a
                    className="tracking-[1px] transition-colors duration-300 group-hover/hover:text-green-06 "
                    href="#"
                  >
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className="footer__top-list flex flex-col  items-start xs:min-w-[280px] xs:gap-[12px] lg:min-w-0 
          lg:gap-[6px] lg:border-r lg:border-r-black-0 lg:pl-[16px] lg:pr-[32px] "
          >
            {dataCategories?.slice(14, 18)?.map((item, index) => {
              return (
                <li
                  key={item?.id}
                  className=" group/hover   w-full cursor-pointer  text-[13px] font-bold uppercase leading-[18px]
                   text-black-0 xs:text-center lg:text-start 
             "
                >
                  <a
                    className="tracking-[1px] transition-colors duration-300 group-hover/hover:text-green-06 "
                    href="#"
                  >
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="flex flex-col xs:mt-[10px] xs:items-center xs:gap-[12px] sm:flex-row lg:mt-[0px] lg:flex-col 
          lg:items-start lg:gap-[6px]"
          >
            <div className="flex h-[24px] items-center justify-start gap-[10px] lg:pl-[16px] lg:pr-[32px] ">
              <a
                className="group/svg"
                target="_blank"
                href="https://www.facebook.com/nongthonvn"
              >
                <svg
                  className="hover:fill-green-97"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                    d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                    fill="#212121"
                  />
                </svg>
              </a>
              <a
                className="group/svg"
                target="_blank"
                href="https://www.youtube.com/hashtag/nongthonvietnam"
              >
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                    d="M23.8425 3.97453C23.8425 1.86516 22.2909 0.168281 20.3737 0.168281C17.7769 0.0468748 15.1284 0 12.4219 0H11.5781C8.87811 0 6.22498 0.0468749 3.62811 0.16875C1.71561 0.16875 0.164042 1.875 0.164042 3.98438C0.0468549 5.65266 -0.00283263 7.32141 -2.01251e-05 8.99016C-0.00470763 10.6589 0.0484174 12.3292 0.159355 14.0011C0.159355 16.1105 1.71092 17.8214 3.62342 17.8214C6.35154 17.948 9.14998 18.0042 11.9953 17.9995C14.8453 18.0089 17.6359 17.9495 20.3672 17.8214C22.2844 17.8214 23.8359 16.1105 23.8359 14.0011C23.9484 12.3277 24 10.6589 23.9953 8.98547C24.0059 7.31672 23.955 5.64641 23.8425 3.97453ZM9.70311 13.5886V4.37766L16.5 8.98078L9.70311 13.5886Z"
                    fill="#212121"
                  />
                </svg>
              </a>
              <a
                className="group/svg"
                target="_blank"
                href="https://zaloweb.me/"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_122_179)">
                    <path
                      className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.53 4.48 20 10 20C15.52 20 20 15.53 20 10C20 4.48 15.52 0 10 0ZM10 14.85C9.22 14.85 8.47 14.73 7.77 14.53C5.92 15.73 4.47 15.44 4.47 15.44C6.02 13.79 5.6 13.78 5.63 13.4C4.27 12.43 3.69 11.11 3.69 9.76C3.69 6.94 6.53 4.66 10 4.66C13.47 4.66 16.31 6.94 16.31 9.76C16.31 12.57 13.47 14.85 10 14.85Z"
                      fill="#212121"
                    />
                    <path
                      className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                      d="M8.29002 8.55009C8.33002 8.49009 8.36002 8.43009 8.38002 8.36009C8.40002 8.27009 8.40002 8.18009 8.40002 8.09009H6.03002V8.60009H7.67002C7.14002 9.27009 6.61002 9.94009 6.07002 10.6001C6.03002 10.6601 5.99002 10.7301 5.97002 10.8001C5.95002 10.8901 5.96002 10.9801 5.96002 11.0701H8.20002C8.30002 11.0701 8.39002 10.9801 8.40002 10.8801V10.5901H6.67002C7.15002 9.99009 7.62002 9.39009 8.09002 8.79009C8.16002 8.71009 8.22002 8.63009 8.29002 8.55009Z"
                      fill="#212121"
                    />
                    <path
                      className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                      d="M14.01 9.01007C13.79 8.82007 13.5 8.72007 13.21 8.74007C13.04 8.74007 12.88 8.79007 12.73 8.86007C12.5 8.98007 12.31 9.18007 12.2 9.42007C12.07 9.71007 12.06 10.0501 12.18 10.3501C12.28 10.6201 12.49 10.8501 12.75 10.9701C13.03 11.1101 13.35 11.1301 13.64 11.0301C13.9 10.9401 14.13 10.7501 14.27 10.5001C14.41 10.2601 14.46 9.97007 14.41 9.70007C14.36 9.43007 14.22 9.18007 14.01 9.01007ZM13.92 10.1001C13.88 10.2501 13.79 10.3801 13.67 10.4701C13.57 10.5401 13.45 10.5901 13.33 10.6001C13.18 10.6201 13.02 10.5801 12.9 10.5001C12.78 10.4201 12.68 10.3101 12.62 10.1701C12.56 10.0101 12.56 9.82007 12.62 9.66007C12.71 9.43007 12.93 9.26007 13.17 9.23007C13.3 9.21007 13.44 9.23007 13.56 9.29007C13.7 9.36007 13.82 9.48007 13.89 9.62007C13.95 9.77007 13.97 9.95007 13.92 10.1001Z"
                      fill="#212121"
                    />
                    <path
                      className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                      d="M11.25 10.8901C11.25 10.9801 11.32 11.0701 11.41 11.0701H11.76V8.09009H11.25V10.8901Z"
                      fill="#212121"
                    />
                    <path
                      className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                      d="M10.37 8.97003C10.22 8.86003 10.04 8.79003 9.86003 8.76003C9.64003 8.73003 9.41003 8.76003 9.21003 8.85003C8.97003 8.96003 8.77003 9.15003 8.65003 9.39003C8.54003 9.60003 8.50003 9.84003 8.53003 10.07C8.56003 10.32 8.68003 10.55 8.85003 10.73C9.02003 10.91 9.26003 11.04 9.51003 11.08C9.81003 11.12 10.12 11.04 10.37 10.86C10.37 10.97 10.45 11.06 10.55 11.07H10.84V8.81003H10.37V8.97003ZM10.34 10.11C10.3 10.26 10.21 10.39 10.08 10.48C9.97003 10.56 9.82003 10.61 9.67003 10.61C9.53003 10.61 9.38003 10.56 9.27003 10.47C9.16003 10.38 9.07003 10.26 9.03003 10.13C8.98003 9.96003 8.99003 9.77003 9.07003 9.62003C9.17003 9.40003 9.40003 9.24003 9.64003 9.23003C9.80003 9.22003 9.95003 9.27003 10.08 9.36003C10.19 9.43003 10.27 9.55003 10.32 9.67003C10.37 9.81003 10.38 9.97003 10.34 10.11Z"
                      fill="#212121"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_122_179">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="email flex h-[40px] w-full items-center lg:pl-[16px] lg:pr-[32px]">
              <Input
                placeholder="Type in here…"
                sx={{
                  height: '100%',
                  width: '100%',
                  minWidth: '200px',
                  borderRadius: '0px',
                  '&::before': {
                    border: '1.5px solid #12aa60',
                    transform: 'scaleX(0)',
                    left: '2.5px',
                    right: '2.5px',
                    bottom: 0,
                    top: 'unset',
                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                    borderRadius: 0,
                    borderBottomLeftRadius: '64px 20px',
                    borderBottomRightRadius: '64px 20px',
                  },
                  '&:focus-within::before': {
                    transform: 'scaleX(1)',
                  },
                }}
              />
              <Button
                className=""
                sx={{
                  '&:hover': {
                    backgroundColor: '#12aa60',
                    color: '#fff',
                  },
                  height: '100%',
                  width: '80px',
                  borderRadius: '0px',
                  borderLeft: '0px',
                  transition: 'all .4s cubic-bezier(0.1,0.9,0.2,1)',
                }}
                variant="outlined"
                color="neutral"
              >
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1650px] bg-[#e5e5e5]">
        <div className="footer__middle  gap-[20px] py-[32px] xs:flex xs:flex-col xs:items-center lg:grid lg:grid-cols-12 ">
          <div
            className="footer__middle-logo flex flex-col items-center justify-center xs:mb-[10px] lg:col-start-1 lg:col-end-4 
          lg:mb-0  "
          >
            <a
              href=""
              className="relative w-fit before:absolute before:-bottom-[11px] before:left-1/2 before:w-full before:-translate-x-1/2 before:text-center before:font-rb before:text-[6px]
               before:text-black-0 before:content-['TẠP_CHÍ_ĐIỆN_TỬ_CỦA_TỔNG_HỘI_NÔNG_NGHIỆP_VIỆT_NAM']
            "
            >
              <svg
                width="203"
                height="115"
                viewBox="0 0 203 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8289 112.847L0.00976562 51.9023H16.7442L31.4897 91.4911L23.8289 112.847ZM23.4654 112.662L45.2682 51.9023H62.0095L38.691 112.662H23.4654Z"
                  fill="#066D3B"
                />
                <path
                  d="M202.399 87.4142C202.399 102.633 191.913 114.077 175.652 114.077C159.39 114.077 149.014 102.633 149.014 87.4142V36.5674H164.575V51.9031H201.7V66.8888H164.575V87.8879C164.575 93.4346 168.005 98.9813 175.652 98.9813C183.429 98.9813 186.851 93.4346 186.851 87.8879V82.3412H202.406L202.399 87.4142Z"
                  fill="#066D3B"
                />
                <path
                  d="M79.3344 51.9092H63.7715V112.669H79.3344V51.9092Z"
                  fill="#066D3B"
                />
                <path
                  d="M63.6543 36.5675V47.2695H79.3338V36.5675C79.3338 36.4851 79.3338 36.4027 79.3338 36.3203H63.668C63.6612 36.4027 63.6543 36.4851 63.6543 36.5675Z"
                  fill="#066D3B"
                />
                <path
                  d="M106.341 88.3613H144.652C147.244 64.0534 132.039 50.3721 114.242 50.3721C97.0342 50.3721 83.002 64.788 83.002 82.4577C83.002 99.5165 96.3895 113.527 113.055 114.166V109.395H116.814V114.104C130.435 113.184 140.132 104.981 143.472 93.3177H127.088C124.262 97.917 119.194 99.9215 114.002 99.9215C105.285 99.9215 98.0904 92.487 98.0904 82.4577C98.0904 72.3117 105.285 64.5271 114.002 64.5271C120.956 64.5271 126.971 68.543 129.09 75.3802H106.341V88.3613Z"
                  fill="#066D3B"
                />
                <path
                  d="M17.3065 7.9957C18.2221 8.93945 18.9411 10.0561 19.4215 11.2805C19.9019 12.505 20.1342 13.8129 20.1048 15.1281V33.347H14.8306V15.0046C14.8306 12.0733 13.0337 10.2954 10.0296 10.2954C7.0256 10.2954 5.27668 12.0733 5.27668 15.0046V33.347H0.00247954V15.1281C-0.0269173 13.8129 0.20533 12.505 0.685736 11.2805C1.16614 10.0561 1.88512 8.93945 2.80077 7.9957C4.78028 6.18482 7.36503 5.18066 10.0468 5.18066C12.7286 5.18066 15.3133 6.18482 17.2928 7.9957H17.3065Z"
                  fill="#066D3B"
                />
                <path
                  d="M48.9711 19.4877C48.9711 27.4851 43.2648 33.8281 35.4324 33.8281C27.5999 33.8281 21.8594 27.4851 21.8594 19.4877C21.8594 11.4903 27.5725 5.18164 35.4324 5.18164C43.2922 5.18164 48.9711 11.5246 48.9711 19.4877ZM43.6626 19.4877C43.6626 14.3735 39.9864 10.138 35.4324 10.138C30.8783 10.138 27.2021 14.3735 27.2021 19.4877C27.2021 24.6019 30.8783 28.8717 35.4324 28.8717C39.9864 28.8717 43.6626 24.6156 43.6626 19.4877Z"
                  fill="#066D3B"
                />
                <path
                  d="M68.0574 7.9957C68.9719 8.94001 69.6896 10.0569 70.1688 11.2813C70.648 12.5058 70.8792 13.8134 70.8489 15.1281V33.347H65.5815V15.0046C65.5815 12.0733 63.7846 10.2954 60.7806 10.2954C57.7765 10.2954 56.0345 12.0733 56.0345 15.0046V33.347H50.7603V15.1281C50.7309 13.8129 50.9631 12.505 51.4435 11.2805C51.924 10.0561 52.6429 8.93945 53.5585 7.9957C55.538 6.18482 58.1228 5.18066 60.8046 5.18066C63.4863 5.18066 66.0711 6.18482 68.0506 7.9957H68.0574Z"
                  fill="#066D3B"
                />
                <path
                  d="M72.6113 19.4879C72.6113 11.4424 78.5165 5.14062 86.0677 5.14062C92.2404 5.14062 96.8836 8.62789 98.6394 14.2981H92.9743C92.3582 12.988 91.3807 11.8815 90.157 11.1092C88.9333 10.3368 87.5144 9.93081 86.0677 9.93905C81.4725 9.93905 77.8787 14.2981 77.8787 19.4879C77.8787 24.6776 81.4725 29.0984 86.0677 29.0984C87.8422 29.0961 89.5624 28.4859 90.9423 27.3695C92.3223 26.253 93.2789 24.6975 93.6533 22.9614H86.7536V18.0874H99.4418C99.7642 27.7529 93.955 33.8763 86.0677 33.8763C78.5234 33.8282 72.6113 27.5264 72.6113 19.4879Z"
                  fill="#066D3B"
                />
                <path
                  d="M129.865 10.7284H109.742V5.85449H129.865V10.7284ZM122.437 33.3819H117.17V12.829H122.417L122.437 33.3819Z"
                  fill="#066D3B"
                />
                <path
                  d="M136.373 5.85449V33.3476H131.064V5.85449H136.373ZM151.51 33.3476H146.235V21.7394H138.451V16.8723H146.235V5.85449H151.51V33.3476Z"
                  fill="#066D3B"
                />
                <path
                  d="M180.5 19.4877C180.5 27.4851 174.787 33.8281 166.962 33.8281C159.136 33.8281 153.389 27.4851 153.389 19.4877C153.389 11.4903 159.095 5.18164 166.962 5.18164C174.828 5.18164 180.5 11.5246 180.5 19.4877ZM175.185 19.4877C175.185 14.3735 171.516 10.138 166.955 10.138C162.394 10.138 158.725 14.3735 158.725 19.4877C158.725 24.6019 162.401 28.8717 166.955 28.8717C171.509 28.8717 175.185 24.6156 175.185 19.4877Z"
                  fill="#066D3B"
                />
                <path
                  d="M199.58 7.9957C200.496 8.93945 201.215 10.0561 201.695 11.2805C202.175 12.505 202.408 13.8129 202.378 15.1281V33.347H197.104V15.0046C197.104 12.0733 195.314 10.2954 192.303 10.2954C189.292 10.2954 187.571 12.0733 187.571 15.0046V33.347H182.303V15.1281C182.273 13.8134 182.504 12.5058 182.984 11.2813C183.463 10.0569 184.18 8.94001 185.095 7.9957C187.074 6.18482 189.659 5.18066 192.341 5.18066C195.023 5.18066 197.607 6.18482 199.587 7.9957H199.58Z"
                  fill="#066D3B"
                />
                <path
                  d="M33.7254 0.5H36.3386L39.48 3.89117L38.3894 4.70807L35.0903 1.921H34.9737L31.6746 4.70807L30.584 3.91863L33.7254 0.5Z"
                  fill="#066D3B"
                />
                <path
                  d="M165.625 0.5H168.238L171.379 3.89117L170.289 4.6806L166.997 1.89353H166.88L163.567 4.70807L162.477 3.91863L165.625 0.5Z"
                  fill="#066D3B"
                />
                <path
                  d="M129.995 47.9075V48.3743H120.428L114.715 43.4798L108.995 48.3743H99.6465V47.7634L111.258 37.8096H118.199L129.995 47.9075Z"
                  fill="#066D3B"
                />
              </svg>
            </a>
          </div>
          <div
            className="footer__middle-team flex flex-col justify-center gap-[10px] xs:items-center lg:col-start-4 
          lg:col-end-8 lg:items-start"
          >
            <div className="flex flex-wrap items-center gap-[4px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Tổng Biên tập:</p>
              <h3 className="font-rb text-sm">Nguyễn Đức Quang</h3>
            </div>
            <div className="flex flex-wrap items-center gap-[4px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Phó tổng Biên tập thường trực: </p>
              <h3 className="font-rb text-sm">Nguyễn Thị Quốc Hương</h3>
            </div>
            <div className="flex flex-wrap items-center gap-[4px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Phó Tổng Biên tập:</p>
              <h3 className="font-rb text-sm">Nguyễn Mạnh Thường</h3>
            </div>
            <div className="flex flex-wrap items-center gap-[4px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Tổng Thư ký tòa soạn:</p>
              <h3 className="font-rb text-sm">Lê An</h3>
            </div>
          </div>
          <div
            className="footer__middle-contact
            flex flex-col justify-center gap-[10px] xs:items-center lg:col-start-8 lg:col-end-13 lg:items-start"
          >
            <div className="address flex flex-wrap items-center gap-[6px] xs:justify-center lg:justify-normal">
              <p className="w-fit font-rr text-sm">Tòa soạn:</p>
              <p className="text-center font-rb text-sm lg:text-left">
                Lầu 10, tòa nhà số 12 Võ Văn Kiệt, P. Nguyễn Thái Bình, Q. 1,
                TPHCM
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[6px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Tel:</p>
              <a className="phone font-rb text-sm " href="tel:+0932056666">
                093.205.6666
              </a>
              -
              <a className="phone font-rb text-sm " href="tel:+0932056666">
                (028) 3821 1283
              </a>
            </div>
            <div className="fax flex flex-wrap items-center gap-[6px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm"> Fax:</p>
              <p className="font-rb text-sm">(028) 3914 7286</p>
            </div>
            <div className="email flex flex-wrap items-center  gap-[6px] xs:justify-center lg:justify-normal">
              <p className="font-rr text-sm">Email:</p>
              <a
                className="font-rb text-sm"
                href="mailto:toasoan@nongthonviet.com.vn"
              >
                toasoan@nongthonviet.com.vn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container xs:p-[16px] sm:p-[32px]">
        <div className="footer__bottom flex flex-col items-center justify-center gap-[10px]">
          <h3 className="license font-rl xs:text-center xs:text-xs sm:text-sm lg:text-left">
            Giấy phép xuất bản số 438/GP – BTTTT, cấp ngày 27/9/2016
          </h3>
          <h3 className="copyright text-center font-rl xs:text-xs sm:text-sm">
            &copy; Bản quyền thuộc về Tạp chí điện tử Nông thôn Việt. Cấm sao
            chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
          </h3>
          <h3 className="text font-rl xs:text-xs sm:text-sm ">
            &copy; Powered by NGN
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
