import { CATEGORY_OPTION } from '@/contants/category';
import useQuery from '@/hooks/useQuery';
import newService from '@/service/newService';
import compareTime from '@/utils/compareTime';
import { timeVN } from '@/utils/timeVN';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
const LIMIT_ITEM = 10;
const LIMIT_ITEM_ARICULTURAL = 10;
const LIMIT_ITEM_BUSINESS = 4;
const LIMIT_ITEM_NEW_ARICULTURAL = 10;
const LIMIT_ITEM_VILLAGE = 4;
const useHomePage = () => {
  //// query obj
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCategory, setIsCategory] = useState();

  // Update Query String
  const updateQueryString = (queryObject) => {
    const newQuerryString = queryString.stringify({
      ...queryObject,
      limit: LIMIT_ITEM,
    });
    setSearchParams(new URLSearchParams(newQuerryString));
  };
  //// Call API
  const { data: dataNews, loading } = useQuery(() =>
    newService.getNews(LIMIT_ITEM)
  );

  const { data: dataAgricultural, loading: loadingAgricultural } = useQuery(
    () =>
      newService.getCategoriesById(
        LIMIT_ITEM_ARICULTURAL,
        CATEGORY_OPTION.NONG_NGHIEP.alias
      )
  );
  const { data: dataBusiness, loading: loadingBusiness } = useQuery(() =>
    newService.getCategoriesById(
      LIMIT_ITEM_BUSINESS,
      CATEGORY_OPTION.DOANH_NGHIEP.id
    )
  );
  const { data: dataNewAricultural, loading: loadingNewAricultural } = useQuery(
    () =>
      newService.getCategoriesById(
        LIMIT_ITEM_NEW_ARICULTURAL,
        CATEGORY_OPTION.NONG_THON.id
      )
  );
  const { data: dataFlameTransmitter, loading: loadingFlameTransmitter } =
    useQuery(() =>
      newService.getCategoriesById(
        LIMIT_ITEM_NEW_ARICULTURAL,
        CATEGORY_OPTION.NGUOI_TRUYEN_LUA.id
      )
    );
  const { data: dataVillage, loading: loadingVillage } = useQuery(() =>
    newService.getCategoriesById(
      LIMIT_ITEM_VILLAGE,
      CATEGORY_OPTION.LANG_NGHE_VIET.id
    )
  );
  const [comparedTime, setComparedTime] = useState();
  const [comparedTimeAgricultural, setComparedTimeAgricultural] = useState();
  //// timeNewest
  const timeNewest = dataNews?.map((news, index) => {
    const newTime = news.publicationTime;
    return { time: timeVN(newTime), import_today: '1.10' };
  });

  return {
    dataNews,
    // findNewest,
    dataAgricultural,
    dataBusiness,
    dataNewAricultural,
    dataFlameTransmitter,
    dataVillage,
    // filterAgricultural,
    // findNewestAgicultural,
  };
};

export default useHomePage;
