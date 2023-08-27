import React from 'react';
import NewsItem from './NewsItem';
import BreadCrumb from '../BreadCrumb';
import { dateVN, timeVN } from '@/utils/timeVN';
import { twMerge } from 'tailwind-merge';

const NewsOneColumn = ({ dataBusiness, dataVillage, dataNews, className }) => {
  if (dataBusiness)
    return (
      <div
        className={`flex flex-wrap items-center gap-[10px]
                    lg:flex-nowrap lg:gap-[20px] ${className ?? ''}`}
      >
        {dataBusiness?.length &&
          dataBusiness?.slice(0, 4)?.map((item) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <div
                key={id}
                className="flex flex-col gap-[4px] xs:w-[calc((100%-10px)/2)] lg:w-[25%]  lg:gap-[8px]"
              >
                <NewsItem
                  classNameDesc={`min-h-[40px]`}
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                  lineClamp="line-2"
                />
                <BreadCrumb
                  className={`flex-col-reverse justify-center gap-[0px] sm:flex-row sm:justify-start sm:gap-[8px]`}
                >
                  <div className="flex gap-3">
                    <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                      0,
                      5
                    )}`}</BreadCrumb.Item>
                    <BreadCrumb.Item>
                      {`${dateVN(publicationTime)}`}
                    </BreadCrumb.Item>
                  </div>
                  <span className="span-rounded hidden sm:block"></span>
                  <BreadCrumb.Item className={`hover font-rm text-sm`} hover>
                    <a href="#">{category?.categoryName}</a>
                  </BreadCrumb.Item>
                </BreadCrumb>
              </div>
            );
          })}
      </div>
    );
  if (dataVillage)
    return (
      <div
        className={`flex flex-wrap items-center gap-[10px]
                    lg:flex-nowrap lg:gap-[20px] ${className ?? ''}`}
      >
        {dataVillage?.length &&
          dataVillage?.slice(0, 4)?.map((item) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <div
                key={id}
                className=" flex flex-col gap-[4px] xs:w-[calc((100%-10px)/2)] lg:w-[25%]  lg:gap-[8px]"
              >
                <NewsItem
                  classNameDesc={`min-h-[40px]`}
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                  lineClamp="line-2"
                />
                <BreadCrumb
                  className={`flex-col-reverse justify-center gap-[0px] sm:flex-row sm:justify-start sm:gap-[8px]`}
                >
                  <div className="flex gap-3">
                    <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                      0,
                      5
                    )}`}</BreadCrumb.Item>
                    <BreadCrumb.Item>
                      {`${dateVN(publicationTime)}`}
                    </BreadCrumb.Item>
                  </div>
                  <span className="span-rounded hidden sm:block"></span>
                  <BreadCrumb.Item className={`hover font-rm text-sm`} hover>
                    <a href="#">{category?.categoryName}</a>
                  </BreadCrumb.Item>
                </BreadCrumb>
              </div>
            );
          })}
      </div>
    );
  if (dataNews)
    return (
      <div
        className={` flex flex-wrap items-center gap-[10px]
                    lg:flex-nowrap lg:gap-[20px] ${className ?? ''}`}
      >
        {dataNews?.length &&
          dataNews?.slice(5, 9)?.map((item) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <div
                key={id}
                className={twMerge(
                  `flex flex-col gap-[4px]  xs:w-[calc((100%-10px)/2)] lg:w-[25%]  lg:gap-[8px]`
                )}
              >
                <NewsItem
                  classNameDesc={`min-h-[40px]`}
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                  lineClamp="line-2"
                ></NewsItem>
                <BreadCrumb
                  className={twMerge(
                    `flex-col-reverse justify-center gap-[0px] sm:flex-row sm:justify-start sm:gap-[8px]`
                  )}
                >
                  <div className="flex gap-3">
                    <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                      0,
                      5
                    )}`}</BreadCrumb.Item>
                    <BreadCrumb.Item>
                      {`${dateVN(publicationTime)}`}
                    </BreadCrumb.Item>
                  </div>
                  <span className="span-rounded hidden sm:block"></span>
                  <BreadCrumb.Item className={` font-rm text-sm`} hover>
                    <a href="#">{category?.categoryName}</a>
                  </BreadCrumb.Item>
                </BreadCrumb>
              </div>
            );
          })}
      </div>
    );
};

export default NewsOneColumn;
