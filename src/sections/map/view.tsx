'use client';

import { useState } from 'react';

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { DatePicker } from '@mui/x-date-pickers';
import { useSettingsContext } from 'src/components/settings';
import Image from 'src/components/image';
import style from 'src/theme/style/mouse.module.css';
import Iconify from 'src/components/iconify';
import { fPercent } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import { MAPBOX_API } from 'src/config-global';
import AppWidget from '../overview/app/app-widget';
import ChartDonut from '../_examples/extra/chart-view/chart-donut';
import ChartRadialBar from '../_examples/extra/chart-view/chart-radial-bar';
import { heatmapLayer } from '../_examples/extra/map-view/heatmap/map-style';
import ChartArea from '../_examples/extra/chart-view/chart-area';
import MapHighlightByFilter from '../_examples/extra/map-view/map-highlight-by-filter';
import MapMarkersPopups from '../_examples/extra/map-view/map-markers-popups';
import MapGeoJsonAnimation from '../_examples/extra/map-view/map-geo-json-animation';

interface CardProps {
  title: string;
  series: number[];
  labels: string[];
}

const CardAnalitycs = ({ title, series, labels }: CardProps) => (
  <Card
    sx={{
      height: {
        xs: 'auto',
        md: '200px',
      },
      width: '100%',
    }}
  >
    <CardContent>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          color="text.primary"
          sx={{
            width: {
              xs: '100%',
              md: '100px',
            },
            fontSize: '13px',
            fontWeight: 'bold',
          }}
        >
          Medidor de Hidratación Vegetal
        </Typography>
        <Box style={{ width: '90%', height: '150px' }}>
          <ChartRadialBar series={series} labels={['Hidratación Mayor a 0.8']} />
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

export default function MapAppView() {
  const formats = [
    'RGB',
    'NDVI',
    'GNDVI',
    'NDRE',
    'LCI',
    'OSAVI',
    'EVI',
    'SAVI',
    'EWI',
    'LAI',
    'LST',
    'NBR',
    'NDBI',
    'NDSI',
    'SCVI',
    'EMI',
    'NDMI',
  ];

  const [formatsselected, setFormatsselected] = useState(() => ['']);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormatsselected(newFormats);
  };

  const Months = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' },
    { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' },
    { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' },
    { value: 12, name: 'Dic' },
  ];

  const mdUp = useResponsive('up', 'md');
  const [price, setPrice] = useState<number[]>([4, 7]);

  const [startDate, setstartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dateError = startDate && endDate ? startDate > endDate : false;

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const theme = useTheme();

  const baseSettings = {
    mapboxAccessToken: MAPBOX_API,
    minZoom: 1,
  };

  const valueMonth = (value: number) => (value > 0 ? `${value} Meses` : `${value}`);

  const valueLabelFormatMonth = (value: number) =>
    Months[Months.findIndex((mark) => mark.value === value)].name;

  const renderButton = (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Button variant="contained" color="primary">
        Descargar
      </Button>
    </Box>
  );

  const images = [
    {
      name: 'NDVI',
      src: '/assets/NDVI.png',
    },
    {
      name: 'NDVI',
      src: '/assets/NDVI.png',
    },
    {
      name: 'RGB',
      src: '/assets/RGB.png',
    },
    {
      name: 'GNDVI',
      src: '/assets/GNDVI.png',
    },
    {
      name: 'LCI',
      src: '/assets/LCI.png',
    },
    {
      name: 'OSAVI',
      src: '/assets/OSAVI.png',
    },
  ];

  const renderMAp = (
    <Box
      sx={{
        width: '100%',
        height: '630px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* <Image
        src={
          images[
            images.findIndex((mark) => mark.name === formatsselected[formatsselected.length - 1])
          ]
            ? images[
                images.findIndex(
                  (mark) => mark.name === formatsselected[formatsselected.length - 1]
                )
              ].src
            : images[images.length - 1].src
        }
        alt="map"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '30px',
        }}
      /> */}
      {/* <Map width="800" height="400" center={[38.907132, -77.036546]} zoom={12}>
        {({ TileLayer }) => (
          <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <TileLayer
              url="https://vb9w1lc7-4444.brs.devtunnels.ms/api/v1/tiles/{z}/{x}/{y}.png"
              crossOrigin
            />
          </>
        )}
      </Map> */}
      {/* <MapMarkersPopups /> */}

      <MapGeoJsonAnimation {...baseSettings} mapStyle="mapbox://styles/mapbox/satellite-v9" />
    </Box>
  );

  const options = (
    <ToggleButtonGroup
      size="small"
      fullWidth
      color="primary"
      value={formatsselected}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      {formats.map((format, index) => (
        <ToggleButton key={index} value={format}>
          {format}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
  const [formatsselectedmobile, setFormatsselectedmobile] = useState(formats.slice(0, 6));

  const optionMobile = (
    <Paper sx={{ p: 2, mt: 3, mb: 3 }} elevation={3}>
      <Autocomplete
        multiple
        disablePortal
        fullWidth
        color="primary"
        defaultValue={formats}
        value={formatsselectedmobile}
        onChange={(event, newValue) => {
          setFormatsselectedmobile(newValue || formats[0]);
        }}
        options={formats}
        renderInput={(params) => <TextField {...params} />}
        renderTags={(selected, getTagProps) =>
          formatsselectedmobile.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option}
              label={option}
              color="primary"
              size="small"
              sx={{ m: 0.5 }}
            />
          ))
        }
      />
    </Paper>
  );

  const renderSlider = (
    <Slider
      track="inverted"
      size="small"
      min={1}
      max={12}
      step={1}
      marks={Months}
      value={price}
      onChange={handleChangePrice}
      valueLabelDisplay="auto"
      valueLabelFormat={valueLabelFormatMonth}
    />
  );
  const renderRange = (
    <Stack
      width="100%"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      spacing={3}
    >
      <DatePicker
        label="Start date"
        value={startDate}
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
        }}
        onChange={setstartDate}
      />

      <DatePicker
        label="End date"
        value={endDate}
        onChange={setEndDate}
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
        }}
        slotProps={{
          textField: {
            error: dateError,
            helperText: dateError && 'La fecha de inicio debe ser anterior a la fecha de fin',
          },
        }}
      />
    </Stack>
  );
  const renderTrending = (
    <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
      <Iconify
        icon="eva:trending-up-fill"
        sx={{
          mr: 1,
          p: 0.5,
          width: 24,
          height: 24,
          borderRadius: '50%',
          color: 'success.main',
          bgcolor: alpha(theme.palette.success.main, 0.16),
        }}
      />

      <Typography variant="subtitle2" component="div" noWrap>
        +{fPercent(10)}
        <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
          {' más que la semana pasada'}
        </Box>
      </Typography>
    </Stack>
  );

  const renderAnalitycs = (
    <>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        width="100%"
        spacing={3}
        justifyContent={{
          xs: 'center',
          md: 'space-between',
        }}
      >
        {[12.3, 12.3, 22.44].map((item, index) => (
          <CardAnalitycs
            key={index}
            title="Medidor de Hidratación Vegetal"
            series={[item]}
            labels={['Hidratación Mayor a 0.8']}
          />
        ))}
      </Stack>
      <Card>
        <CardHeader title="Índice de Vegetación Mejorado (EVI)" />
        <CardContent>
          <Typography variant="h2" component="div" noWrap>
            0.85
          </Typography>
          {renderTrending}

          <ChartArea series={[{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] }]} />
        </CardContent>
      </Card>
    </>
  );

  return (
    <Container maxWidth="xl">
      <Stack spacing={2}>
        {renderButton}

        {renderMAp}

        {mdUp ? options : optionMobile}

        {/* {renderSlider} */}

        {renderRange}

        {renderAnalitycs}
      </Stack>
    </Container>
  );
}
