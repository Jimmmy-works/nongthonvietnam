import React from 'react';

const HeaderListMenu = () => {
  return (
    <div className={`header__bottom sm:border-b-[1px] sm:pb-[10px] `}>
      <h2 className="mt-[12px] w-full text-center font-rb text-2xl sm:mb-[16px] sm:border-b-[4px] sm:border-b-black-21">
        KINH TẾ XANH
      </h2>
      <ul className={`menulist`}>
        <li className="group/text menulist__item">
          <a className="menulist__item-text" href="#">
            NÔNG NGHIỆP
          </a>
        </li>
        <li className="group/text relative ">
          <a
            className="w-full text-black-0 transition-colors duration-[500ms] before:absolute
                  before:-bottom-[1px] before:h-[2px] before:w-full before:origin-right before:scale-x-0 
                  before:bg-green-06 before:transition-transform before:duration-500
                  group-hover/text:text-green-06 before:group-hover/text:origin-left before:group-hover/text:scale-x-[100%]
                  "
            href="#"
          >
            DOANH NGHIỆP
          </a>
        </li>
        <li className="group/text relative ">
          <a
            className="w-full text-black-0 transition-colors duration-[500ms] before:absolute
                  before:-bottom-[1px] before:h-[2px] before:w-full before:origin-right before:scale-x-0 
                  before:bg-green-06 before:transition-transform before:duration-500
                  group-hover/text:text-green-06 before:group-hover/text:origin-left before:group-hover/text:scale-x-[100%]
                  "
            href="#"
          >
            PHÁT TRIỂN BỀN VỮNG
          </a>
        </li>
        <li className="group/text relative ">
          <a
            className="w-full text-black-0 transition-colors duration-[500ms] before:absolute
                  before:-bottom-[1px] before:h-[2px] before:w-full before:origin-right before:scale-x-0 
                  before:bg-green-06 before:transition-transform before:duration-500
                  group-hover/text:text-green-06 before:group-hover/text:origin-left before:group-hover/text:scale-x-[100%]
                  "
            href="#"
          >
            NHÂN VẬT
          </a>
        </li>
        <li className="group/text relative ">
          <a
            className="w-full text-black-0 transition-colors duration-[500ms] before:absolute
                  before:-bottom-[1px] before:h-[2px] before:w-full before:origin-right before:scale-x-0 
                  before:bg-green-06 before:transition-transform before:duration-500
                  group-hover/text:text-green-06 before:group-hover/text:origin-left before:group-hover/text:scale-x-[100%]
                  "
            href="#"
          >
            NÔNG THÔN MỚI
          </a>
        </li>
        <li className="group/text relative ">
          <a
            className="w-full text-black-0 transition-colors duration-[500ms] before:absolute
                  before:-bottom-[1px] before:h-[2px] before:w-full before:origin-right before:scale-x-0 
                  before:bg-green-06 before:transition-transform before:duration-500
                  group-hover/text:text-green-06 before:group-hover/text:origin-left before:group-hover/text:scale-x-[100%]
                  "
            href="#"
          >
            ĐỐI THOẠI
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderListMenu;
