/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Menu } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
// _mock
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { useLocales } from 'src/locales';
import BgPowerHouse from './background/BgPowerhouse';

// ----------------------------------------------------------------------

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: '100%',
  borderRadius: 24,
  padding: '7px 10.5px',
  backgroundColor: theme.palette.background.neutral,
  border: `1px solid ${theme.palette.background.neutral}`,
}));

export default function HomePowerhouse() {
  const [options, setOptions] = useState(-1);

  const { t } = useLocales();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mdUp = useResponsive('up', 'md');
  const Theme = useTheme();

  const renderInfo = (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap="10px"
      sx={{
        height: 1,
        mx: 'auto',
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="h3" sx={{ fontWeight: '700' }}>
          Funcionalidades
        </Typography>
      </m.div>
    </Stack>
  );

  const togglesData = [
    {
      name: 'Dashboard integral',
      icon: 'assets/icons/home/powerhouse/Dashboard.png',
      color: Theme.palette.info.main,
      title: 'Dashboard integral',
      text: 'Nuestra plataforma combina análisis avanzado, visualizaciones satélitales y datos meteorológicos, ofreciendo una solución integral para optimizar decisiones y maximizar la productividad y rentabilidad en el sector agrícola.',
      value: -1,
    },
    {
      name: 'Indices Multispectrales',
      icon: 'assets/icons/home/powerhouse/Multiespaciales.png',
      color: Theme.palette.primary.main,
      title: 'Indices Multispectrales',
      text: 'Nuestra plataforma destaca por la inclusión de índices multispectrales. Estos índices, procesados con la más alta precisión, brindan una perspectiva detallada y profunda de variaciones y características específicas del terreno, facilitando decisiones informadas.',
      value: 1,
    },
    {
      name: 'Múltiples Mapas',
      icon: 'assets/icons/home/powerhouse/Mapas.png',
      color: Theme.palette.info.main,
      title: 'Múltiples Mapas',
      text: 'Además, ponemos a tu disposición una amplia gama de mapas detallados. Estos mapas no solo representan la geografía, sino que integran datos relevantes y actualizados, ofreciendo una visualización completa de las áreas de interés.',
      value: 2,
    },
    {
      name: 'Análisis Comparativo',
      icon: 'assets/icons/home/powerhouse/Comparativo.png',
      color: Theme.palette.primary.main,
      title: 'Análisis Comparativo',
      text: 'Uno de los pilares de nuestra herramienta es el análisis comparativo. A través de esta función, puedes contrastar datos, resultados y tendencias, permitiendo identificar oportunidades y áreas de mejora con claridad.',
      value: 3,
    },
    {
      name: 'Gráficas Informativas',
      icon: 'assets/icons/home/powerhouse/Informativas.png',
      color: Theme.palette.info.main,
      title: 'Gráficas Informativas',
      text: 'Para una representación visual más intuitiva, nuestra plataforma ofrece gráficas informativas. Estas gráficas transforman los datos complejos en visualizaciones sencillas y claras, facilitando su interpretación y aplicación en estrategias agroindustriales.',
      value: 4,
    },
  ];

  const renderToggle = (
    <StyledToggleButtonGroup
      color="primary"
      exclusive
      onChange={(e, value) => {
        if (!value) return;
        setOptions(value);
      }}
      value={options}
      aria-label="Platform"
    >
      {togglesData.map((item, index) => (
        <ToggleButton
          key={index}
          value={item.value}
          sx={{
            color: Theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(item.color, 0.4),
            },
            '&.Mui-selected': {
              backgroundColor: alpha(item.color, 0.4),
              color: Theme.palette.text.primary,
              '&:hover': {
                backgroundColor: alpha(item.color, 0.5),
              },
            },
          }}
        >
          <Image src={item.icon} alt={item.name} sx={{ width: 40, height: 40, mr: '17px' }} />
          <Box
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.name}
          </Box>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );

  const renderToggleMobile = (
    <>
      <Button
        variant="contained"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={
          <Image
            src={togglesData[togglesData.findIndex((item) => item.value === options)].icon}
            alt="icon"
            sx={{ width: 40, height: 40, mr: '17px' }}
          />
        }
        endIcon={
          <Iconify
            icon={open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            width={20}
            height={20}
          />
        }
        sx={{
          width: '100%',
          minWidth: '300px',
          padding: '15px 27px',
          backgroundColor: Theme.palette.background.neutral,
          color: Theme.palette.text.primary,
          '&:hover': {
            backgroundColor: alpha(
              togglesData[togglesData.findIndex((item) => item.value === options)].color,
              0.4
            ),
          },
        }}
      >
        <div
          style={{
            flexGrow: 1,
            textAlign: 'initial',
          }}
        >
          {togglesData[togglesData.findIndex((item) => item.value === options)].name}
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: '100%',
            minWidth: '300px',
          },
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {togglesData.map((item, index) => {
          if (item.value === options) return;
          return (
            <MenuItem
              key={index}
              onClick={() => {
                setOptions(item.value);
                handleClose();
              }}
            >
              <Image src={item.icon} alt={item.name} sx={{ width: 40, height: 40, mr: '17px' }} />
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  const renderData = (
    <Stack
      sx={{
        width: '100%',
        gap: '87px',
        height: { xs: 'auto', md: '350px' },
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'initial',
        alignItems: 'center',
        padding: { xs: '0 20px', md: '0 20px' },
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
        }}
      >
        <Box
          sx={{
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: '700',
              textAlign: 'initial',
              color: togglesData[togglesData.findIndex((item) => item.value === options)].color,
            }}
          >
            {togglesData[togglesData.findIndex((item) => item.value === options)].title}
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'initial',
              fontWeight: '400',
              maxWidth: '800px',
              color: Theme.palette.text.secondary,
            }}
          >
            {togglesData[togglesData.findIndex((item) => item.value === options)].text}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Image
          src="/assets/images/home/Dashboard.png"
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: '380px',
            maxHeight: '306px',
            borderRadius: '16px',
            objectFit: 'cover',
            boxShadow: '3.37557px 3.37557px 33.75569px 0px rgba(178, 170, 156, 0.25)',
          }}
        />
        <BgPowerHouse
          color={togglesData[togglesData.findIndex((item) => item.value === options)].color}
          style={{
            position: 'absolute',
            top: '-74px',
            left: '-216px',
            width: '160%',
            height: '150%',
            objectFit: 'cover',
            zIndex: '-1',
          }}
        />
      </Box>
    </Stack>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: Theme.palette.background.neutral,
      }}
    >
      <Container
        id="features-mia"
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          gap="87px"
          sx={{
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <m.div variants={varFade().in}>{renderInfo}</m.div>
          {mdUp ? <Box>{renderToggle} </Box> : <Box>{renderToggleMobile} </Box>}
          {renderData}
        </Stack>
      </Container>
    </Box>
  );
}
