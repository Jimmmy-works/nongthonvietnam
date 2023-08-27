import Backtotop from '@/components/Backtotop';
import { MainProvider } from '@/components/MainContext';
import Overplay from '@/components/Overplay';
import SubscriptionMarazin from '@/components/SubscriptionMarazin';
import Footer from '@/pages/Footer';
import Header from '@/pages/Header';
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <MainProvider>
      <motion.div className="progressbar" style={{ scaleX }} />
      <Header />
      <Outlet />
      <SubscriptionMarazin />
      <Footer />
      <Backtotop />
    </MainProvider>
  );
};

export default MainLayout;
