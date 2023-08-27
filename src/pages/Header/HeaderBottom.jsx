import { useMainContext } from '@/components/MainContext';
import React, { useEffect, useState } from 'react';
import HeaderListMenu from './HeaderListMenu';

const HeaderBottom = ({ showNav, lastPosYNav }) => {
    const [isConfig, setIsConfig] = useState(false);
    const { openNav } = useMainContext();
    const isFixed = () => {
        const windowPosY = window.scrollY;
        const heigthHeaderBottom =
            document.body.querySelector('.header__bottom').offsetHeight;
        const heigthNav = document.querySelector('.nav').offsetHeight;
        if (windowPosY > heigthNav - heigthHeaderBottom + 100) {
            setIsConfig(true);
        } else {
            setIsConfig(false);
        }
    };
    useEffect(() => {
        isFixed();
    }, [window.scrollY]);

    return <HeaderListMenu />;
};

export default HeaderBottom;
