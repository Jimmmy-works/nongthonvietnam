import React from 'react';
import NewsItem from './NewsItem';
import BreadCrumb from '../BreadCrumb';
import { LocaleVN, dateVN, timeVN } from '@/utils/timeVN';
import { Link } from 'react-router-dom';
const NewTwoColumn = ({ dataNews, dataAgricultural }) => {
  return (
    <div className="my-[16px] grid grid-cols-1 gap-y-[14px] sm:my-[32px] sm:grid-cols-4 sm:gap-x-[14px] ">
      <div className="sm:col-start-1 sm:col-end-4">
        {dataNews?.length &&
          dataNews?.slice(0, 1)?.map((item) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <div className=" flex flex-col gap-[20px] " key={id}>
                <NewsItem
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-xl"
                  lineClamp="line-3"
                />
                <div>
                  <Link to={'/'}>
                    <h2 className="mb-[8px] line-clamp-3 truncate whitespace-normal text-center font-rb transition-colors duration-300 hover:text-green-06 md:text-[2.4rem] lg:text-2xl">
                      {title}
                    </h2>
                  </Link>
                  <BreadCrumb>
                    <div className="flex gap-3">
                      <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                        0,
                        5
                      )}`}</BreadCrumb.Item>
                      <BreadCrumb.Item>
                        {' '}
                        {`${dateVN(publicationTime)}`}
                      </BreadCrumb.Item>
                    </div>
                    <BreadCrumb.Item className={`font-rm text-sm`} hover>
                      <a href="#">{category?.categoryName}</a>
                    </BreadCrumb.Item>
                  </BreadCrumb>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-row flex-wrap gap-[10px] sm:col-start-4 sm:col-end-5 sm:flex-col sm:flex-nowrap sm:gap-[12px] ">
        {dataNews?.length &&
          dataNews?.slice(1, 4)?.map((item, index) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <NewsItem
                className={`xs:w-[calc((100%-24px)/2)] sm:w-full`}
                key={id || index}
                size="size-m"
                desc={title}
                alt={featuredMedia?.alt}
                imgSrc={featuredMedia?.resolutions?.original?.uri}
                lineClamp="line-3"
              />
            );
          })}
      </div>
    </div>
  );
};

export default NewTwoColumn;
