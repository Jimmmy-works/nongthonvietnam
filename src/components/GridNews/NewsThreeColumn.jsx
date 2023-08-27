import React from 'react';
import BreadCrumb from '../BreadCrumb';
import NewsItem from './NewsItem';
import { dateVN, timeVN } from '@/utils/timeVN';
import { twMerge } from 'tailwind-merge';

const NewsThreeColumn = ({
  dataAgricultural,
  dataNewAricultural,
  dataFlameTransmitter,
}) => {
  if (dataAgricultural)
    return (
      <div className=" grid xs:gap-y-[10px] lg:grid-cols-12 lg:gap-x-[20px]">
        <div className=" flex flex-col gap-[12px] lg:col-start-1 lg:col-end-7">
          {dataAgricultural?.length &&
            dataAgricultural?.slice(0, 1)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div className="flex flex-col gap-[6px]" key={id}>
                  <NewsItem
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-l"
                    desc={title}
                    lineClamp="line-2"
                  />
                  <BreadCrumb
                    className={` justify-normal gap-[8px] xs:justify-start`}
                  >
                    <div className="flex gap-3">
                      <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                        0,
                        5
                      )}`}</BreadCrumb.Item>
                      <BreadCrumb.Item>{`${dateVN(
                        publicationTime
                      )}`}</BreadCrumb.Item>
                    </div>
                    <span className="span-rounded"></span>
                    <BreadCrumb.Item className={`font-rm text-sm`} hover>
                      <a href="#">{category?.categoryName}</a>
                    </BreadCrumb.Item>
                  </BreadCrumb>
                </div>
              );
            })}
        </div>
        <div className="flex gap-[12px] xs:flex-row lg:col-start-7 lg:col-end-10 lg:flex-col">
          {dataAgricultural?.length &&
            dataAgricultural?.slice(2, 4)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <NewsItem
                  key={id}
                  className={`xs:w-[calc((100%-12px)/2)] sm:w-full`}
                  classNameWrapperImg={`pb-[56.2763%]`}
                  lineClamp="line-3"
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                />
              );
            })}
        </div>
        <div className="hidden lg:col-start-10  lg:col-end-13 lg:block">
          {dataAgricultural?.length &&
            dataAgricultural?.slice(5, 10)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div
                  key={id}
                  className={`
                  not-lastChild:before:absolute not-lastChild:before:-bottom-[16px] not-lastChild:before:h-[1px] 
                  not-lastChild:before:w-full not-lastChild:before:bg-grey-d9 relative 
                  mt-[32px] first:mt-[0px]`}
                >
                  <NewsItem
                    className={` 
                  `}
                    classNameWrapperImg={`max-w-[123px] min-w-[100px]`}
                    classNameDesc={`max-w-[157px] leading-[1.7rem] `}
                    lineClamp="line-4"
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-s"
                    desc={title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  if (dataNewAricultural)
    return (
      <div className=" grid xs:gap-y-[10px] lg:grid-cols-12 lg:gap-x-[20px]">
        <div className=" flex flex-col gap-[12px] lg:col-start-1 lg:col-end-7">
          {dataNewAricultural?.length &&
            dataNewAricultural?.slice(0, 1)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div className="flex flex-col gap-[6px]" key={id}>
                  <NewsItem
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-l"
                    desc={title}
                    lineClamp="line-2"
                  />
                  <BreadCrumb
                    className={` justify-normal gap-[8px] xs:justify-start`}
                  >
                    <div className="flex gap-3">
                      <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                        0,
                        5
                      )}`}</BreadCrumb.Item>
                      <BreadCrumb.Item>{`${dateVN(
                        publicationTime
                      )}`}</BreadCrumb.Item>
                    </div>
                    <span className="span-rounded"></span>
                    <BreadCrumb.Item className={`font-rm text-sm`} hover>
                      <a href="#">{category?.categoryName}</a>
                    </BreadCrumb.Item>
                  </BreadCrumb>
                </div>
              );
            })}
        </div>
        <div className="flex gap-[12px] xs:flex-row lg:col-start-7 lg:col-end-10 lg:flex-col">
          {dataNewAricultural?.length &&
            dataNewAricultural?.slice(2, 4)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <NewsItem
                  key={id}
                  className={`xs:w-[calc((100%-12px)/2)] sm:w-full`}
                  classNameWrapperImg={`pb-[56.2763%]`}
                  lineClamp="line-3"
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                />
              );
            })}
        </div>
        <div className="hidden lg:col-start-10  lg:col-end-13 lg:block">
          {dataNewAricultural?.length &&
            dataNewAricultural?.slice(5, 10)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div
                  key={id}
                  className={`
                  not-lastChild:before:absolute not-lastChild:before:-bottom-[16px] not-lastChild:before:h-[1px] 
                  not-lastChild:before:w-full not-lastChild:before:bg-grey-d9 relative 
                  mt-[32px] first:mt-[0px]`}
                >
                  <NewsItem
                    className={` 
                  `}
                    classNameWrapperImg={`max-w-[123px] min-w-[100px]`}
                    classNameDesc={`max-w-[157px] leading-[1.7rem] `}
                    lineClamp="line-4"
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-s"
                    desc={title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  if (dataFlameTransmitter)
    return (
      <div className=" grid xs:gap-y-[10px] lg:grid-cols-12 lg:gap-x-[20px]">
        <div className=" flex flex-col gap-[12px] lg:col-start-1 lg:col-end-7">
          {dataFlameTransmitter?.length &&
            dataFlameTransmitter?.slice(0, 1)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div className="flex flex-col gap-[6px]" key={id}>
                  <NewsItem
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-l"
                    desc={title}
                    lineClamp="line-2"
                  />
                  <BreadCrumb
                    className={` justify-normal gap-[8px] xs:justify-start`}
                  >
                    <div className="flex gap-3">
                      <BreadCrumb.Item>{`${timeVN(publicationTime).substring(
                        0,
                        5
                      )}`}</BreadCrumb.Item>
                      <BreadCrumb.Item>{`${dateVN(
                        publicationTime
                      )}`}</BreadCrumb.Item>
                    </div>
                    <span className="span-rounded"></span>
                    <BreadCrumb.Item className={`font-rm text-sm`} hover>
                      <a href="#">{category?.categoryName}</a>
                    </BreadCrumb.Item>
                  </BreadCrumb>
                </div>
              );
            })}
        </div>
        <div className="flex gap-[12px] xs:flex-row lg:col-start-7 lg:col-end-10 lg:flex-col">
          {dataFlameTransmitter?.length &&
            dataFlameTransmitter?.slice(2, 4)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <NewsItem
                  key={id}
                  className={`xs:w-[calc((100%-12px)/2)] sm:w-full`}
                  classNameWrapperImg={`pb-[56.2763%]`}
                  lineClamp="line-3"
                  alt={featuredMedia?.alt}
                  imgSrc={featuredMedia?.resolutions?.original?.uri}
                  size="size-m"
                  desc={title}
                />
              );
            })}
        </div>
        <div className="hidden lg:col-start-10  lg:col-end-13 lg:block">
          {dataFlameTransmitter?.length &&
            dataFlameTransmitter?.slice(5, 10)?.map((item) => {
              const { title, publicationTime, featuredMedia, category, id } =
                item || {};
              return (
                <div
                  key={id}
                  className={`
                  not-lastChild:before:absolute not-lastChild:before:-bottom-[16px] not-lastChild:before:h-[1px] 
                  not-lastChild:before:w-full not-lastChild:before:bg-grey-d9 relative 
                  mt-[32px] first:mt-[0px]`}
                >
                  <NewsItem
                    className={` 
                  `}
                    classNameWrapperImg={`max-w-[123px] min-w-[100px]`}
                    classNameDesc={`max-w-[157px] leading-[1.7rem] `}
                    lineClamp="line-4"
                    alt={featuredMedia?.alt}
                    imgSrc={featuredMedia?.resolutions?.original?.uri}
                    size="size-s"
                    desc={title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
};

export default NewsThreeColumn;
