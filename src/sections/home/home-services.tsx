import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { styled } from '@mui/system';

import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  height: '50px',
  width: '230px',
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const ToggleButtonsHome = () => {
  const [alignment, setAlignment] = React.useState('Drones');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Servicios"
        >
          <ToggleButton
            value="Satelites"
            aria-label="satelites"
            sx={{
              width: '50%',
              '&.Mui-selected': {
                color: '#EB5117',
                backgroundColor: '#EB511714',
                '&:hover': {
                  backgroundColor: '#EB511760',
                },
              },
            }}
          >
            Satelites
          </ToggleButton>
          <ToggleButton
            value="Drones"
            aria-label="drones"
            sx={{
              width: '50%',

              '&.Mui-selected': {
                color: '#EB5117',
                backgroundColor: '#EB511714',
                '&:hover': {
                  backgroundColor: '#EB511760',
                },
              },
            }}
          >
            <svg
              style={{
                marginRight: 5,
              }}
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill={alignment === 'Drones' ? '#EB5117' : '#919EAB'}
            >
              <path
                d="M15.3626 7.11932C16.0081 7.11932 16.639 6.92793 17.1757 6.56935C17.7123 6.21077 18.1306 5.70111 18.3776 5.10481C18.6246 4.50852 18.6892 3.85237 18.5633 3.21934C18.4374 2.58632 18.1266 2.00485 17.6702 1.54846C17.2138 1.09208 16.6323 0.781273 15.9993 0.655357C15.3663 0.52944 14.7101 0.594065 14.1138 0.841059C13.5175 1.08805 13.0079 1.50632 12.6493 2.04298C12.2907 2.57963 12.0993 3.21056 12.0993 3.85599H13.4046C13.4046 3.46873 13.5195 3.09017 13.7346 2.76818C13.9498 2.44619 14.2556 2.19523 14.6133 2.04703C14.9711 1.89883 15.3648 1.86006 15.7446 1.93561C16.1244 2.01116 16.4733 2.19764 16.7472 2.47147C17.021 2.7453 17.2075 3.09419 17.283 3.474C17.3586 3.85382 17.3198 4.24751 17.1716 4.60528C17.0234 4.96306 16.7724 5.26886 16.4504 5.48401C16.1285 5.69916 15.7499 5.81399 15.3626 5.81399V7.11932ZM3.61463 7.11932V5.81399C3.22738 5.81399 2.84882 5.69916 2.52682 5.48401C2.20483 5.26886 1.95387 4.96306 1.80567 4.60528C1.65748 4.24751 1.6187 3.85382 1.69425 3.474C1.7698 3.09419 1.95628 2.7453 2.23012 2.47147C2.50395 2.19764 2.85283 2.01116 3.23264 1.93561C3.61246 1.86006 4.00615 1.89883 4.36393 2.04703C4.7217 2.19523 5.0275 2.44619 5.24265 2.76818C5.4578 3.09017 5.57263 3.46873 5.57263 3.85599H6.87797C6.87797 3.21056 6.68658 2.57963 6.328 2.04298C5.96942 1.50632 5.45975 1.08805 4.86346 0.841059C4.26716 0.594065 3.61101 0.52944 2.97799 0.655357C2.34496 0.781273 1.76349 1.09208 1.30711 1.54846C0.850719 2.00485 0.539917 2.58632 0.414 3.21934C0.288084 3.85237 0.352709 4.50852 0.599703 5.10481C0.846697 5.70111 1.26497 6.21077 1.80162 6.56935C2.33827 6.92793 2.9692 7.11932 3.61463 7.11932ZM15.3626 18.8673C16.2281 18.8673 17.0582 18.5235 17.6702 17.9115C18.2822 17.2995 18.626 16.4695 18.626 15.604C18.626 14.7385 18.2822 13.9085 17.6702 13.2965C17.0582 12.6845 16.2281 12.3407 15.3626 12.3407V13.646C15.7499 13.646 16.1285 13.7608 16.4504 13.976C16.7724 14.1911 17.0234 14.4969 17.1716 14.8547C17.3198 15.2125 17.3586 15.6062 17.283 15.986C17.2075 16.3658 17.021 16.7147 16.7472 16.9885C16.4733 17.2623 16.1244 17.4488 15.7446 17.5244C15.3648 17.5999 14.9711 17.5612 14.6133 17.413C14.2556 17.2648 13.9498 17.0138 13.7346 16.6918C13.5195 16.3698 13.4046 15.9913 13.4046 15.604H12.0993C12.1002 16.4692 12.4443 17.2988 13.0561 17.9106C13.6679 18.5224 14.4974 18.8665 15.3626 18.8673ZM3.61463 18.8673C4.47986 18.8665 5.3094 18.5224 5.9212 17.9106C6.53301 17.2988 6.8771 16.4692 6.87797 15.604H5.57263C5.57263 15.9913 5.4578 16.3698 5.24265 16.6918C5.0275 17.0138 4.7217 17.2648 4.36393 17.413C4.00615 17.5612 3.61246 17.5999 3.23264 17.5244C2.85283 17.4488 2.50395 17.2623 2.23012 16.9885C1.95628 16.7147 1.7698 16.3658 1.69425 15.986C1.6187 15.6062 1.65748 15.2125 1.80567 14.8547C1.95387 14.4969 2.20483 14.1911 2.52682 13.976C2.84882 13.7608 3.22738 13.646 3.61463 13.646V12.3407C2.74914 12.3407 1.9191 12.6845 1.30711 13.2965C0.69511 13.9085 0.351295 14.7385 0.351295 15.604C0.351295 16.4695 0.69511 17.2995 1.30711 17.9115C1.9191 18.5235 2.74914 18.8673 3.61463 18.8673Z"
                fill={alignment === 'Drones' ? '#EB5117' : '#919EAB'}
              />
              <path
                d="M6.87842 11.4176V8.04202L3.15365 4.31725C3.09132 4.25705 3.04159 4.18503 3.00739 4.1054C2.97318 4.02577 2.95518 3.94013 2.95443 3.85347C2.95367 3.76681 2.97019 3.68086 3.003 3.60065C3.03582 3.52044 3.08428 3.44757 3.14556 3.38629C3.20684 3.32501 3.27972 3.27655 3.35993 3.24373C3.44014 3.21091 3.52608 3.1944 3.61274 3.19515C3.6994 3.19591 3.78504 3.21391 3.86467 3.24812C3.9443 3.28232 4.01632 3.33204 4.07652 3.39438L7.01353 6.33138C7.1779 5.80327 7.50683 5.34156 7.95227 5.01368C8.39771 4.68581 8.93632 4.50895 9.48942 4.50895C10.0425 4.50895 10.5811 4.68581 11.0266 5.01368C11.472 5.34156 11.8009 5.80327 11.9653 6.33138L14.9017 3.39438C15.0241 3.27202 15.19 3.20329 15.3631 3.20329C15.5362 3.20329 15.7021 3.27202 15.8245 3.39438C15.9469 3.51677 16.0156 3.68275 16.0156 3.85582C16.0156 4.02888 15.9469 4.19486 15.8245 4.31725L12.0998 8.04202V11.4176L15.8245 15.1424C15.9469 15.2648 16.0156 15.4308 16.0156 15.6038C16.0156 15.7769 15.9469 15.9429 15.8245 16.0653C15.7021 16.1876 15.5362 16.2564 15.3631 16.2564C15.19 16.2564 15.0241 16.1876 14.9017 16.0653L11.9647 13.1283C11.8003 13.6564 11.4714 14.1181 11.0259 14.446C10.5805 14.7738 10.0419 14.9507 9.48877 14.9507C8.93567 14.9507 8.39706 14.7738 7.95162 14.446C7.50618 14.1181 7.17725 13.6564 7.01287 13.1283L4.07587 16.0653C3.95278 16.1842 3.78791 16.2499 3.61679 16.2484C3.44566 16.247 3.28196 16.1783 3.16095 16.0573C3.03994 15.9363 2.9713 15.7726 2.96981 15.6015C2.96833 15.4304 3.03411 15.2655 3.153 15.1424L6.87842 11.4176ZM8.18376 12.3405C8.18376 12.6867 8.32128 13.0187 8.56608 13.2635C8.81088 13.5083 9.1429 13.6458 9.48909 13.6458C9.83529 13.6458 10.1673 13.5083 10.4121 13.2635C10.6569 13.0187 10.7944 12.6867 10.7944 12.3405V7.11915C10.7944 6.77296 10.6569 6.44094 10.4121 6.19614C10.1673 5.95134 9.83529 5.81382 9.48909 5.81382C9.1429 5.81382 8.81088 5.95134 8.56608 6.19614C8.32128 6.44094 8.18376 6.77296 8.18376 7.11915V12.3405Z"
                fill={alignment === 'Drones' ? '#EB5117' : '#919EAB'}
              />
            </svg>
            Drones
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </Box>
  );
};
// ----------------------------------------------------------------------
const CARS = [
  {
    title: 'Industriales',
    list: [
      'Inspección Aérea',
      'Análisis De Celdas Fotovoltaicas',
      'Integridad de lineas de descarga',
    ],
    link: 'Learn more',
  },
  {
    title: 'Inmobiliarios',
    list: [
      'Inspección Aérea',
      'Análisis De Celdas Fotovoltaicas',
      'Integridad de lineas de descarga',
    ],
    link: 'Learn more',
  },
  {
    title: 'Seguridad',
    list: [
      'Inspección Aérea',
      'Análisis De Celdas Fotovoltaicas',
      'Integridad de lineas de descarga',
    ],
    link: 'Learn more',
  },
  {
    title: 'Agropecuario',
    list: [
      'Inspección Aérea',
      'Análisis De Celdas Fotovoltaicas',
      'Integridad de lineas de descarga',
    ],
    link: 'Learn more',
  },
  {
    title: 'Adicionales',
    list: [
      'Inspección Aérea',
      'Análisis De Celdas Fotovoltaicas',
      'Integridad de lineas de descarga',
    ],
    link: 'Learn more',
  },
];

const Item = styled(m.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 28,
  textAlign: 'left',
  color: theme.palette.text.primary,
  borderRadius: 9,
  flexGrow: 1,
  width: 336,
  height: 350,
  gap: 61,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 28,
    height: 310,
  },
}));

const StyledUl = styled('ul')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 16,
}));

export default function HomeServices() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">Servicios</Typography>
        </m.div>
        <m.div variants={varFade().inDown}>
          <ToggleButtonsHome />
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography>Choose the perfect plan for your needs. Always flexible to grow</Typography>
        </m.div>
        <Stack spacing={{ xs: 1, sm: 5 }} direction="row" useFlexGap flexWrap="wrap">
          {CARS.map((card) => (
            <Item variants={varFade().inUp}>
              <Image
                src={`/assets/icons/home/${card.title}.svg`}
                alt={card.title}
                width={42}
                height={42}
              />
              <Box>
                <Typography variant="h4">{card.title}</Typography>
                <StyledUl>
                  {card.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </StyledUl>
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    position: 'absolute',
                    bottom: 28,
                    right: 28,
                    color: '#EB5117',
                    fontSize: 16,
                    textDecoration: 'none',
                  }}
                >
                  {`${card.link} >`}
                </Box>
              </Box>
            </Item>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
