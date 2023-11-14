/* eslint-disable react/no-danger */
import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import * as Yup from 'yup';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

export default function HomeContacUs() {
  const Theme = useTheme();
  const [expanded, setExpanded] = useState<string>('panel0');

  const { t } = useTranslation();

  const handleChange = (panel: string) => {
    setExpanded(panel);
  };

  const dataList = [
    {
      title: '¿Necesito experiencia previa para usar la BioSat ?',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      title: '¿Cuantas hectáreas mínimas se pueden contratar?',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      title: '¿Qué hago si encuentro un problema en la plataforma?',
      description: 'lorem ipsum dolor sit amet',
    },
  ];

  const renderAcoordions = (
    <>
      {dataList.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={() => handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                icon={
                  expanded === `panel${index}` ? 'zondicons:minus-solid' : 'octicon:feed-plus-16'
                }
                color={Theme.palette.info.main}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={Theme.palette.text.secondary}>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );

  const renderForm = (
    <>
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h3"
          sx={{
            lineHeight: '55px',
            fontWeight: '400',
          }}
        >
          Contáctanos
        </Typography>
      </m.div>
      <m.div variants={varFade().inDown}>
        <Typography
          variant="body1"
          color={Theme.palette.text.secondary}
          sx={{
            fontWeight: '400',
            marginBottom: { xs: 5, md: '38px' },
          }}
        >
          ¿Quieres Contratar? ¿Tienes Preguntas? <br /> ¡Estamos Aquí para Ayudarte! Deja tus datos
          y nos pondremos en contacto.
        </Typography>
      </m.div>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Please enter your name'),
          email: Yup.string().email().required('Please enter your email'),
        })}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Nombre"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputProps={{
                    sx: {
                      borderRadius: 80,

                      background: Theme.palette.background.neutral,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: Theme.palette.background.neutral,
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: Theme.palette.background.neutral,
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: Theme.palette.background.neutral,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '16.5px 27px',
                    },
                    '& .MuiInputLabel-root': {
                      left: '12px',
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Correo"
                    name="email"
                    fullWidth
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                      sx: {
                        borderRadius: 80,
                        background: Theme.palette.background.neutral,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: Theme.palette.background.neutral,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: Theme.palette.background.neutral,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: Theme.palette.background.neutral,
                        },
                      },
                    }}
                    sx={{
                      '& .MuiInputBase-input': {
                        padding: '16.5px 27px',
                      },
                      '& .MuiInputLabel-root': {
                        left: '12px',
                      },
                    }}
                  />
                  <Button
                    color="info"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={formik.isSubmitting}
                    sx={{
                      borderRadius: 80,
                      fontWeight: 700,
                      fontSize: 13,
                      textTransform: 'capitalize',
                    }}
                  >
                    Conversemos
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );

  return (
    <Box
      sx={{
        backgroundColor: Theme.palette.background.neutral,
      }}
    >
      <Container
        id="Contact-mia"
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 8, md: 10 }}
        >
          <Grid xs={12} md={6}>
            {renderForm}
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>{renderAcoordions}</m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
