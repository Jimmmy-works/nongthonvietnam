import React from 'react';
import { twMerge } from 'tailwind-merge';

const TitleSection = ({
  className,
  children,
  classNameFirstLine,
  classNameSecondLine,
  classNameTitle,
  renderProps,
}) => {
  return (
    <div className={`mb-[20px] flex items-center gap-3 ${className}`}>
      <span
        className={`horizontal-line-page w-[28px] bg-black-21 ${classNameFirstLine}`}
      />
      <div
        className={twMerge(
          `w-full max-w-max font-rb text-xl ${classNameTitle}`
        )}
      >
        {children}
        {renderProps && renderProps?.()}
      </div>
      <span
        className={`horizontal-line-page bg-black-21 ${classNameSecondLine}`}
      />
    </div>
  );
};

export default TitleSection;
