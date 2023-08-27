import Banner from '@/components/Banner';
import Hamberger from '@/components/Hamberger';
import { useMainContext } from '@/components/MainContext';
import useWindowSize from '@/utils/windowResize';
import { motion, useScroll, useSpring } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const HeaderMiddle = ({
  showNav,
  lastPosYNav,
  controlHamberger,
  openNav,
  onOpenNav,
  windowSize,
  dataCategories,
}) => {
  return (
    // ${openNav ? 'invisible opacity-0' : ''}
    <div className="w-ful header__middle relative ">
      <div className="container mt-[32px] ">
        <div className="flex items-center justify-between border-y-[1px] border-black-21 py-[5px]">
          <div
            className={`${
              controlHamberger ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <Hamberger />
          </div>

          <div className="flex ">
            <input
              className="w-[83px] leading-[16px] placeholder-grey-99 outline-none text-sm placeholder:font-rb "
              type="text"
              placeholder="Search..."
            />
            <span className="mx-[8px] h-[20px] w-[1px] bg-black-21"></span>
            <a className="group/svg" href="#">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-colors duration-[400ms] group-hover/svg:fill-green-06"
                  d="M13.5 12H12.71L12.43 11.73C13.0549 11.0039 13.5117 10.1487 13.7675 9.22559C14.0234 8.30243 14.072 7.33413 13.91 6.38998C13.44 3.60998 11.12 1.38997 8.31997 1.04997C7.33559 0.925441 6.33576 1.02775 5.397 1.34906C4.45824 1.67038 3.60542 2.20219 2.90381 2.90381C2.20219 3.60542 1.67038 4.45824 1.34906 5.397C1.02775 6.33576 0.925441 7.33559 1.04997 8.31997C1.38997 11.12 3.60998 13.44 6.38998 13.91C7.33413 14.072 8.30243 14.0234 9.22559 13.7675C10.1487 13.5117 11.0039 13.0549 11.73 12.43L12 12.71V13.5L16.25 17.75C16.66 18.16 17.33 18.16 17.74 17.75C18.15 17.34 18.15 16.67 17.74 16.26L13.5 12ZM7.49997 12C5.00997 12 2.99997 9.98997 2.99997 7.49997C2.99997 5.00997 5.00997 2.99997 7.49997 2.99997C9.98997 2.99997 12 5.00997 12 7.49997C12 9.98997 9.98997 12 7.49997 12Z"
                  fill="#212121"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex min-w-max -translate-x-1/2 -translate-y-1/2 items-center gap-[9px] xs:hidden lg:flex">
          <h3 className="font-rm uppercase leading-[18px] text-black-29 text-md">
            CÂU CHUYỆN TIÊU ĐIỂM:
          </h3>
          <p className="uppercase leading-[24px] text-black-29 text-lg">
            NÔNG NGHIỆP TUẦN HOÀN TỪ NÔNG DÂN SINH THÁI
          </p>
        </div>
      </div>
      <div
        className={`nav custom-scrollbar-div h-screen overflow-y-scroll pb-[10px]
          ${
            showNav
              ? 'left-50% fixed top-[80px] -translate-x-1/2 pb-[150px]'
              : 'left-50% absolute top-[40px] -translate-x-1/2'
          }
          ${!openNav ? 'invisible opacity-0' : ''}  
         left-1/2 z-10 w-full -translate-x-1/2 bg-[#EEEEEE] transition-all duration-[400ms] `}
      >
        <div className="container">
          <div className="w-full">
            <div className=" flex items-center justify-center sm:justify-between">
              <h2 className="py-[10px] font-rm text-green-06 text-lg">
                Tất cả chuyên mục
              </h2>
              <div
                onClick={onOpenNav}
                className={` relative cursor-pointer items-center gap-[8px] xs:hidden
                lg:flex
                ${
                  !controlHamberger
                    ? 'visible opacity-100'
                    : 'invisible opacity-0'
                }`}
              >
                <p className="text-green-06">Đóng</p>
                <Hamberger />
              </div>
            </div>
            <span className="horizontal-line-page my-[0]"></span>
          </div>
          <div className="flex flex-wrap gap-y-[2.5rem]  bg-[#EEEEEE] pt-[12px] ">
            {dataCategories?.length &&
              dataCategories?.map((item, index) => {
                return (
                  <div
                    key={item?.id}
                    className="sm:min-h[8rem] flex flex-col gap-[10px] px-[8px] xs:w-[calc(100%/2)] sm:w-[calc(100%/3)] lg:min-h-[10rem] lg:w-[calc(100%/5)]"
                  >
                    <ul
                      className="flex flex-col gap-[10px]"
                      key={`${item?.id}${index}` || ''}
                    >
                      <h4 className="font-rm text-[14.5px] leading-[20px] text-black-0">
                        {item?.name}
                      </h4>
                      {item?.subCates?.length > 1 &&
                        item?.subCates?.map((sub) => {
                          return (
                            <li key={sub?.id} className="font-nav">
                              <Link to={'#'}> {sub?.name}</Link>
                            </li>
                          );
                        })}
                    </ul>
                    <button className="text-left font-rm text-grey-99 text-sm hover:text-grey-7b">
                      Xem thêm
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
