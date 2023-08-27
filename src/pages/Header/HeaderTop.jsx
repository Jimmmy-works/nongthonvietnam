import ButtonStyle from '@/components/Button';
import Tabs from '@/components/Tabs';
import React from 'react';

const HeaderTop = () => {
  return (
    <div
      className="hearder__top flex-center md:gap[10px] h-full gap-[10px] xs:mt-[100px] xs:flex-col sm:mt-0 
      md:items-center lg:flex-row
     lg:justify-between"
    >
      <div
        className="flex h-full gap-[42px] align-top xs:justify-center xs:text-center 
	  md:w-full lg:w-auto lg:justify-start lg:text-left"
      >
        <div className="flex flex-col justify-between xs:items-center xs:gap-3 lg:items-start lg:gap-0">
          <div className="flex md:justify-center lg:justify-normal">
            <div className="mr-4 h-[18px] w-[18px] bg-green-06 xs:hidden lg:block"></div>
            <h3 className="font-rm text-black-29 lg:text-sm xl:text-md">
              TẠP CHÍ ĐIỆN <br /> TỬ CỦA TỔNG HỘI NÔNG NGHIỆP VIỆT NAM
            </h3>
          </div>
          <div className="">
            <p className="font-rl leading-[14px] text-black-29 text-xs">
              Thứ ba, ngày 07-03-2023
            </p>
            <p className="font-rl leading-[14px]  text-black-29 text-xs">
              TP. Hồ Chí Minh 22° - 34°C
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[160px] xs:hidden sm:block lg:h-[140px] lg:w-[220px] xl:h-full xl:w-[260px] ">
        <img
          className="h-full w-full "
          srcSet="/images/logo-main.png 2x"
          alt=""
        />
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-[10px]  ">
        <Tabs className={`flex flex-row justify-center gap-4 lg:flex-wrap`} />
        <div className="flex w-full items-center gap-10 xs:justify-center xl:justify-end">
          <div className="relative flex items-center justify-center ">
            <a
              href="#"
              className="block font-rm leading-[18px] transition-colors duration-[400ms] text-sm hover:text-green-06"
            >
              ĐĂNG NHẬP
            </a>
            <span className="span-line"></span>
            <a
              href="#"
              className="font-rm leading-[18px] transition-colors duration-[400ms] text-sm hover:text-green-06"
            >
              ĐĂNG KÝ
            </a>
          </div>
          <div className="flex h-[24px] items-center justify-center gap-[6px] ">
            <a
              className="group/svg"
              target="_blank"
              href="https://www.facebook.com/nongthonvn"
            >
              <svg
                className="hover:fill-green-97"
                width="20"
                height="20"
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
                width="24"
                height="20"
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
            <a className="group/svg" target="_blank" href="https://zaloweb.me/">
              <svg
                width="20"
                height="20"
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
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
