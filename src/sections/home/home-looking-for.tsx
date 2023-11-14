/* eslint-disable react/no-danger */
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled, useTheme } from '@mui/material/styles';
// hooks
// routes
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

const StyledUl = styled('ul')(({ theme }) => ({
  // lista con cradritos en vez de puntos
  listStyle: 'none',
  padding: 0,
}));

const StyledLi = styled('li')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '1.5em',
  textAlign: 'left',
  '&::before': {
    content: '" "',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    display: 'inline-block',
    width: '10px',
    height: '10px',
    backgroundColor: theme.palette.info.main,
    position: 'absolute',
    left: '0',
    top: '12px',
    transform: 'translateY(-50%)',
  },
}));

export default function HomeDiscover() {
  const Theme = useTheme();

  const { t } = useLocales();

  const dataList = [
    {
      title: 'Platforma Unificada',
      description:
        'Simplifica tus esfuerzos de marketing con el panel integral de MIA. Desde programación de publicaciones hasta análisis en tiempo real, todo lo que necesitas está al alcance de tu mano.',
    },
    {
      title: 'IA Integrada',
      description:
        'Aprovecha el poder de la inteligencia artificial. Las recomendaciones de IA de MIA garantizan que tu contenido llegue al público adecuado en el momento óptimo, maximizando el compromiso e impacto.',
    },
    {
      title: 'Enfoque Preparado para el Futuro',
      description:
        'Mantente a la vanguardia de las tendencias digitales con MIA. Nuestra plataforma evoluciona constantemente, garantizando que siempre estés equipado con las herramientas e insights más recientes para dominar tu nicho de mercado.',
    },
  ];

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
          width: '100%',
          maxWidth: '573px',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: Theme.palette.info.main }}>
          ¿Porque datawing?
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h3"
          sx={{
            lineHeight: '44px',
          }}
        >
          Explora la vanguardia en soluciones agroindustriales y desata una revolución en el
          crecimiento de tu negocio
        </Typography>
      </m.div>
      <m.div variants={varFade().inDown}>
        <Typography
          variant="body1"
          sx={{
            mt: '15px',
            color: Theme.palette.text.secondary,
          }}
        >
          En la vanguardia de la tecnología geoespacial, ofrecemos servicios que marcan la
          diferencia, fusionando innovación y eficiencia. Descubre el distintivo que nos posiciona
          líderes en el mercado
        </Typography>
      </m.div>

      <StyledUl>
        {dataList.map((item, index) => (
          <StyledLi key={index}>
            <span
              style={{
                color: Theme.palette.info.main,
                fontWeight: 'bold',
              }}
            >
              {item.title}
            </span>{' '}
            {item.description}
          </StyledLi>
        ))}
      </StyledUl>
    </Stack>
  );

  const renderImgs = (
    <m.div variants={varFade().inRight}>
      <Stack
        gap={3}
        style={{
          position: 'relative',
          zIndex: 999,
          width: '100%',
          height: '100%',
        }}
      >
        <Stack direction="row" gap={2.5} justifyContent="center" alignItems="end">
          <Image
            src="/assets/images/home/Rectangle4.png"
            style={{
              borderRadius: 10,
              width: '30%',
              boxShadow: '0px 30px 60px 0px rgba(59, 130, 246, 0.25)',
            }}
            alt="prueba"
          />
          <Image
            src="/assets/images/home/Rectangle2.png"
            alt="prueba"
            style={{
              borderRadius: 10,
              width: '48%',
              boxShadow: '0px 30px 60px 0px rgba(59, 130, 246, 0.25)',
            }}
          />
          <Image
            src="/assets/images/home/Rectangle1.png"
            alt="prueba"
            style={{
              borderRadius: 10,
              width: '40%',
              boxShadow: `0px 30px 60px 0px rgba(59, 130, 246, 0.25)`,
            }}
          />
        </Stack>

        <Stack direction="row" gap={3} justifyContent="center" alignItems="initial">
          <Image
            src="/assets/images/home/Rectangle3.png"
            alt="prueba"
            style={{
              borderRadius: 10,
              width: '60%',
              boxShadow: '0px 30px 60px 0px rgba(59, 130, 246, 0.25)',
            }}
          />
        </Stack>
      </Stack>
    </m.div>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: Theme.palette.background.neutral,
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 3 }}
        >
          <Grid xs={12} md={6}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>{renderImgs}</m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
