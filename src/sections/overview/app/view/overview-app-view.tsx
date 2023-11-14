'use client';

// @mui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

// hooks
// components
import { alpha } from '@mui/system';
import { Autocomplete, Paper, TextField } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
// assets
import { useResponsive } from 'src/hooks/use-responsive';
import EcommerceWidgetSummary from '../../e-commerce/ecommerce-widget-summary';
import ChartColumnMultipleWithOptions from '../app-chat-multiple';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const settings = useSettingsContext();

  const mdUp = useResponsive('up', 'md');

  const cards = [
    {
      label: 'Índice de Vegetación de Diferencia Normalizada (NDVI)',
      percent: 3.6,
      total: 0.8,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#C684FF' },
            { offset: 100, color: alpha('#C684FF', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Vegetación Mejorado (EVI)',
      percent: 1,
      total: 0.5,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#C684FF' },
            { offset: 100, color: alpha('#C684FF', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Vegetación Ajustado al Suelo (OSAVI)',
      percent: 4.4,
      total: 0.2,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#FFD666' },
            { offset: 100, color: alpha('#FFD666', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Clorofila (CI)',
      percent: 8.6,
      total: 0.25,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#FFD666' },
            { offset: 100, color: alpha('#FFD666', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Agua de Diferencia Normalizada (NDWI)',
      percent: -1.7,
      total: 0.15,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#77ED8B' },
            { offset: 100, color: alpha('#77ED8B', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Agua Mejorado (EWI)',
      percent: -3.6,
      total: 0.35,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#77ED8B' },
            { offset: 100, color: alpha('#77ED8B', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Temperatura de Superficie Terrestre (LST)',
      percent: 6.8,
      total: 0.45,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#EB172A' },
            { offset: 100, color: alpha('#EB172A', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Quemadura de Diferencia Normalizada (NBR)',
      percent: 2.1,
      total: 0.7,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#FFD666' },
            { offset: 100, color: alpha('#FFD666', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Diferencia Normalizada de Áreas Urbanas (NDBI)',
      percent: 1.2,
      total: 0.6,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#FFD666' },
            { offset: 100, color: alpha('#FFD666', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Nieve de Diferencia Normalizada (NDSI)',
      percent: 6.3,
      total: 0.55,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#EB5117' },
            { offset: 100, color: alpha('#EB5117', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Humedad de Diferencia Normalizada (NDMI)',
      percent: 2.5,
      total: 0.99,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#009E7F' },
            { offset: 100, color: alpha('#009E7F', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Vegetación de Diferencia Roja (RDVI)',
      percent: 0.1,
      total: 0.7,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#77ED8B' },
            { offset: 100, color: alpha('#77ED8B', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Estrés Hídrico (CWSI)',
      percent: 3.2,
      total: 0.8,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#77ED8B' },
            { offset: 100, color: alpha('#77ED8B', 0.2) },
          ],
        },
      },
    },
    {
      label: 'Índice de Diferencia Normalizada de Terreno Desnudo (NDBaI)',
      percent: 5.2,
      total: 0.9,
      chart: {
        series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
      },
      fill: {
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0, color: '#C684FF' },
            { offset: 100, color: alpha('#C684FF', 0.2) },
          ],
        },
      },
    },
  ];

  const [index, setIndex] = useState(cards[0]);

  const renderSelectIndexMovile = (
    <>
      <Paper sx={{ p: 2, mb: 3 }} elevation={3}>
        <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          defaultValue={cards[0]}
          value={index}
          onChange={(event, newValue) => {
            setIndex(newValue || cards[0]);
          }}
          options={cards}
          renderInput={(params) => <TextField {...params} />}
        />
      </Paper>
      <EcommerceWidgetSummary
        title={index.label}
        percent={index.percent}
        total={index.total}
        chart={index.chart}
        fill={index.fill}
      />
    </>
  );

  return (
    <Container maxWidth="xl">
      {mdUp ? (
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid xs={12} md={6} key={card.label}>
              <EcommerceWidgetSummary
                title={card.label}
                percent={card.percent}
                total={card.total}
                chart={card.chart}
                fill={card.fill}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        renderSelectIndexMovile
      )}
      <ChartColumnMultipleWithOptions />
    </Container>
  );
}
