import React from 'react';
import NewsItem from '../GridNews/NewsItem';

const SidebarNews = ({ title, dataNews }) => {
  return (
    <div
      className="flex flex-col gap-[16px] rounded-[12px] border-[1px] border-black-0 px-[40px] py-[30px] 
    sm:sticky sm:top-[90px] sm:ml-[38px] sm:mt-[56px]"
    >
      <h2 className="font-rb text-black-21 text-xl">{title}</h2>
      <div className="flex flex-col gap-[20px]">
        {dataNews?.length &&
          dataNews?.slice(0, 6).map((item, index) => {
            const { title, publicationTime, featuredMedia, category, id } =
              item || {};
            return (
              <NewsItem
                key={id}
                size="size-xs"
                desc={title}
                alt={featuredMedia?.alt}
                imgSrc={featuredMedia?.resolutions?.original?.uri}
                lineClamp={'line-3'}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SidebarNews;
