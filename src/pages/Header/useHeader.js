import { useMainContext } from '@/components/MainContext';
import useQuery from '@/hooks/useQuery';
import newService from '@/service/newService';
import useWindowSize from '@/utils/windowResize';
import React, { useEffect, useState } from 'react';

const useHeader = () => {
  const { controlHamberger, openNav, onOpenNav } = useMainContext();
  const [showNav, setShowNav] = useState(false);
  const [lastPosYNav, setLastPosYNav] = useState(0);
  const [heightScroll, setHeightScroll] = useState(0);
  const [widthScroll, setWidthScroll] = useState();
  const { data: dataCategories, loading: loadingCategories } = useQuery(
    newService.getCategories
  );
  const windowSize = useWindowSize();
  useEffect(() => {
    const handleScroll = () => {
      const windowPosY = window.scrollY;
      const heigthHeaderBottom =
        document.body.querySelector('.header__bottom').offsetHeight;
      const heigthNav = document.querySelector('.nav').offsetHeight;
      const heightFinal = heigthNav - heigthHeaderBottom;
      if (windowSize.height > heightFinal) {
        setLastPosYNav(windowPosY);
        setHeightScroll(heightFinal);
      } else {
        setLastPosYNav(windowPosY);
      }
      if (windowPosY > heightFinal) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastPosYNav]);
  const headerMiddleProps = {
    showNav,
    lastPosYNav,
    controlHamberger,
    openNav,
    onOpenNav,
    windowSize,
    dataCategories,
  };
  const headerBottomProps = {
    showNav,
    lastPosYNav,
  };
  return {
    headerMiddleProps,
    headerBottomProps,
    lastPosYNav,
    heightScroll,
    windowSize,
  };
};

export default useHeader;
