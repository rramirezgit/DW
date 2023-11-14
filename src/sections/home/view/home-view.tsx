'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import Image from 'src/components/image';
import HomeHero from '../home-hero';
import HomeUnlock from '../home-unlock';
import HomePowerhouse from '../home-powerhouse';
import HomeDiscover from '../home-looking-for';
import HomeUnleash from '../home-unleash';
import HomeContacUs from '../home-contact-us';

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
          zIndex: 9,
        }}
      >
        <HomeUnlock />

        <HomePowerhouse />

        <Image src="assets/images/home/camp.png" alt="camp" />

        <HomeDiscover />

        <HomeContacUs />
      </Box>
    </MainLayout>
  );
}
