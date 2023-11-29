import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { useState } from 'react';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const CARDS = [
  {
    bg: '/assets/images/home/cars/agro.jpg',
    title: 'Agro Guard',
    description:
      'Optimiza el cuidado de tus cultivos con Agro Guard. Nuestra avanzada tecnología de mapeo satelital te proporciona información detallada sobre el estado de hidratación y salud de tus plantas. Toma decisiones informadas para garantizar un crecimiento saludable y cosechas más abundantes.',
  },
  {
    bg: '/assets/images/home/cars/terra.jpg',
    title: 'TERRA GUARD',
    description:
      'Optimiza el cuidado de tus cultivos con Agro Guard. Nuestra avanzada tecnología de mapeo satelital te proporciona información detallada sobre el estado de hidratación y salud de tus plantas. Toma decisiones informadas para garantizar un crecimiento saludable y cosechas más abundantes.',
  },
  {
    bg: '/assets/images/home/cars/topografia.jpg',
    title: 'Topografía',
    description:
      'Optimiza el cuidado de tus cultivos con Agro Guard. Nuestra avanzada tecnología de mapeo satelital te proporciona información detallada sobre el estado de hidratación y salud de tus plantas. Toma decisiones informadas para garantizar un crecimiento saludable y cosechas más abundantes.',
  },
];

interface CardsProps {
  card: {
    bg: string;
    title: string;
    description: string;
  };
  index: number;
}

const Cards = ({ card, index }: CardsProps) => {
  const [showText, setShowText] = useState(false);
  const mdUp = useResponsive('up', 'md');

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (
    <m.div key={card.title}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          textAlign: 'center',
          width: { xs: '100%', md: '100%' },
          minWidth: '310px',
          gap: '10px',
          borderRadius: '23.33px',
          background: `url(${card.bg}) no-repeat center -1px / cover`,
          height: { xs: 320, md: 661 },
          position: 'relative',
          zIndex: 1,
          p: (theme) => theme.spacing(6, 5),
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: showText ? 1 : 0,
            transition: 'all 0.5s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        />

        <Box
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        >
          <Typography variant={mdUp ? 'h3' : 'h4'} sx={{ mt: 0, mb: 2 }}>
            {card.title}
          </Typography>

          <Typography
            component="li"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '13px', md: '16px' },
              textAlign: 'left',
              transition: 'all 0.5s ease',
              opacity: showText ? 1 : 0,
              cursor: 'pointer',
              marginTop: { xs: '10px', md: '5rem' },
            }}
          >
            {card.description}
          </Typography>
        </Box>
      </Card>
    </m.div>
  );
};
// ----------------------------------------------------------------------

export default function HomeCars() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Box
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{
          gap: { xs: 2, md: 3 },
          overflowX: 'scroll',
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp}>
            <Cards card={card} index={index} />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
