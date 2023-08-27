import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
const NewsItem = ({
  size = 'size-m',
  desc,
  link = '',
  className,
  classNameWrapperImg,
  classNameDesc,
  imgSrc,
  alt,
  lineClamp = '',
  children,
  renderDescProps,
}) => {
  const line = useMemo(() => {
    switch (lineClamp) {
      case 'line-1':
        return 'line-clamp-1';
      case 'line-2':
        return 'line-clamp-2';
      case 'line-3':
        return 'line-clamp-3';
      case 'line-4':
        return 'line-clamp-4';
      default:
        return '';
    }
  }, [lineClamp]);
  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'size-xs':
        return 'news__item-xs';
      case 'size-s':
        return 'news__item-s';
      case 'size-m':
        return 'news__item-m';
      case 'size-l':
        return 'news__item-l';
      case 'size-xl':
        return 'news__item-xl';
      default:
        return '';
    }
  }, [size]);
  const fontClassName = useMemo(() => {
    switch (size) {
      case 'size-xs':
        return 'news__font-xs';
      case 'size-s':
        return 'news__font-s';
      case 'size-m':
        return 'news__font-m';
      case 'size-l':
        return 'news__font-l';
      default:
        return '';
    }
  }, [size]);
  const paddingBottomImage = useMemo(() => {
    switch (size) {
      case 'size-s':
        return 'pb-[23.39%]';
      case 'size-m':
        return 'pb-[55.43%]';
      case 'size-l':
        return 'pb-[56.23%]';
      case 'size-xl':
        return 'pb-[59.364%]';
      default:
        return '';
    }
  }, [size]);

  return (
    <div className={`group/img  ${sizeClassName} ${className ?? ''}`}>
      <Link
        to={`${link}`}
        className={twMerge(
          `${
            size !== 'size-xs'
              ? `wrapper-img`
              : 'block h-full w-full min-w-[60px] max-w-[60px] '
          } ${paddingBottomImage} ${classNameWrapperImg ?? ''}`
        )}
      >
        <img
          onError={(e) => {
            e.target.error = null;
            e.target.src = '/images/img-error.jpg';
          }}
          className={twMerge(
            `transition-transform duration-300 group-hover/img:scale-[1.05] ${
              size !== 'size-xs'
                ? 'image-absolute'
                : 'h-full w-full object-cover'
            }`
          )}
          src={imgSrc ? imgSrc : '/images/img-error.jpg'}
          alt={alt}
        />
      </Link>
      {size !== 'size-xl' && (
        <div
          className={` ${classNameDesc}  truncate whitespace-normal transition-colors duration-300 group-hover/img:text-green-06 ${line} `}
        >
          <Link
            to={`${link}`}
            className={twMerge(
              ` ${fontClassName} 
             `
            )}
          >
            {desc}
          </Link>
          {renderDescProps && renderDescProps?.()}
        </div>
      )}
      {children}
    </div>
  );
};

export default NewsItem;
