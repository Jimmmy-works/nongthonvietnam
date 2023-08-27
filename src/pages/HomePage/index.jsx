import Banner from '@/components/Banner';
import BreadCrumb from '@/components/BreadCrumb';
import NewTwoColumn from '@/components/GridNews/NewTwoColumn';
import NewsItem from '@/components/GridNews/NewsItem';
import NewsOneColumn from '@/components/GridNews/NewsOneColumn';
import NewsThreeColumn from '@/components/GridNews/NewsThreeColumn';
import SidebarNews from '@/components/Sidebar/SidebarNews';
import TitleSection from '@/components/TitleSection';
import React from 'react';
import useHomePage from './useHomePage';
import moment from 'moment';
import { dateVN, timeVN } from '@/utils/timeVN';

const HomePage = () => {
  const {
    dataNews,
    dataAgricultural,
    dataBusiness,
    dataNewAricultural,
    dataFlameTransmitter,
    dataVillage,
  } = useHomePage();
  return (
    <main className="homepage">
      <section className="hot-news">
        <div className="container">
          <NewTwoColumn dataNews={dataNews} />
        </div>
      </section>
      <div className="container mb-[16px] sm:mb-[32px]">
        <span className="horizontal-line-page"></span>
      </div>
      <section className="hot-news-second ">
        <div className="container">
          <NewsOneColumn className dataNews={dataNews} />
        </div>
      </section>
      <div className="container">
        <Banner
          className={`my-[16px] h-[80px]  bg-banner md:h-[120px] lg:my-[32px] lg:h-[160px] xl:h-[240px] `}
        />
      </div>
      <section className="agricultural-news xs:mb-[16px] lg:mb-[32px]">
        <div className=" container">
          <TitleSection children={`NÔNG NGHIỆP`} />
          <NewsThreeColumn dataAgricultural={dataAgricultural} />
        </div>
      </section>
      <section className="business-news">
        <div className="  container">
          <TitleSection children={`DOANH NGHIỆP`} />
          <NewsOneColumn dataBusiness={dataBusiness} />
        </div>
      </section>
      <div className="container my-[16px] flex items-center  justify-center gap-[20px] lg:my-[32px]">
        <Banner
          className={`bg-blue-d9  xs:h-[80px] xs:w-[130px] sm:h-[180px] sm:w-[230px] lg:h-[250px] lg:w-[300px]`}
        />
        <Banner
          className={` bg-blue-d9 xs:h-[80px] xs:w-[130px] sm:h-[180px] sm:w-[230px] lg:h-[250px]  lg:w-[300px] `}
        />
        <Banner
          className={` bg-blue-d9 xs:h-[80px] xs:w-[130px] sm:h-[180px] sm:w-[230px] lg:h-[250px]  lg:w-[300px] `}
        />
      </div>
      <section className="hot-agricultural-news mb-[16px] sm:mb-[32px]">
        <div className="container">
          <TitleSection children={`NÔNG THÔN MỚI`} />
          <NewsThreeColumn dataNewAricultural={dataNewAricultural} />
        </div>
      </section>
      <section className="developmental-news">
        <div className="container">
          <TitleSection children={`LÀNG NGHỀ VIỆT`} />
          <NewsOneColumn dataVillage={dataVillage} />
        </div>
      </section>
      <div className="container">
        <Banner
          className={`my-[16px] h-[80px]  bg-banner md:h-[120px] lg:my-[32px] lg:h-[160px] xl:h-[240px] `}
        />
      </div>
      <section className="flame-transmitter mb-[16px] sm:mb-[32px]">
        <div className="container">
          <TitleSection children={`NGƯỜI TRUYỀN LỬA`} />
          <NewsThreeColumn dataFlameTransmitter={dataFlameTransmitter} />
        </div>
      </section>
      <section className="newest-news ">
        <div className="container overflow-visible">
          <TitleSection children={`MỚI NHẤT`} />
          <div className=" relative grid gap-[20px] xs:grid-cols-1 sm:grid-cols-12 ">
            <div className=" sm:col-start-1  sm:col-end-7 lg:col-start-1 lg:col-end-9">
              <div className="flex flex-col gap-[20px]">
                {dataNews?.length &&
                  dataNews?.slice(0, 7)?.map((item, index) => {
                    const {
                      title,
                      publicationTime,
                      featuredMedia,
                      category,
                      id,
                      excerpt,
                    } = item || {};
                    return (
                      <div
                        key={id}
                        className=" gap-[8px] border-grey-99 pb-[20px] [&:not(:last-child)]:border-b"
                      >
                        <NewsItem
                          alt={featuredMedia?.alt}
                          imgSrc={featuredMedia?.resolutions?.original?.uri}
                          classNameWrapperImg={`sm:max-w-full sm:min-h-[180px] xs:min-h-[200px]  
                          lg:max-w-[243px]  xl:max-w-[295px] pb-[20.245%]`}
                          classNameDesc={`xl:mt-[20px] flex flex-col gap-[6px]`}
                          classNameParent={`flex-row`}
                          className={`sm:flex-col lg:flex-row`}
                          size="size-m"
                          renderDescProps={() => {
                            return (
                              <div className="flex flex-col gap-[6px]">
                                <BreadCrumb
                                  className={`justify-start gap-[8px]`}
                                >
                                  <div className="flex gap-3">
                                    <BreadCrumb.Item
                                      className={`text-[11px] leading-[18px]`}
                                    >{`${timeVN(publicationTime).substring(
                                      0,
                                      5
                                    )}`}</BreadCrumb.Item>
                                    <BreadCrumb.Item
                                      className={`font-rm text-[12px]`}
                                    >{`${dateVN(
                                      publicationTime
                                    )}`}</BreadCrumb.Item>
                                  </div>
                                  <span className="span-rounded"></span>
                                  <BreadCrumb.Item
                                    className={`font-rm text-sm`}
                                    hover
                                  >
                                    <a href="#">{category?.categoryName}</a>
                                  </BreadCrumb.Item>
                                </BreadCrumb>
                                <p className="line-clamp-3 truncate whitespace-normal font-rr leading-[18px] text-grey-7b text-sm">
                                  {excerpt}
                                </p>
                              </div>
                            );
                          }}
                          desc={title}
                          lineClamp={'3'}
                        />
                      </div>
                    );
                  })}
              </div>
              <TitleSection
                classNameFirstLine={`w-full bg-grey-99`}
                classNameSecondLine={`bg-grey-99`}
                classNameTitle={`text-grey-7b xs:text-sm lg:text-md font-rb lg:px-[28px]`}
                className={`sm:col-start-1 sm:col-end-7 lg:col-start-1 lg:col-end-9`}
                renderProps={() => {
                  return (
                    <a
                      className="transition-colors duration-300 hover:text-green-06"
                      href="#"
                    >
                      XEM THÊM
                    </a>
                  );
                }}
              />
            </div>
            <div className="relative sm:col-start-7 sm:col-end-13 lg:col-start-9 lg:col-end-13">
              <SidebarNews dataNews={dataNews} title={`Nổi bật trong tuần`} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
