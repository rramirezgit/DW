import { useState, memo } from 'react';
import Map, { FillLayer, Layer, RasterLayer, Source } from 'react-map-gl';
// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import { MapPopup, MapMarker, MapControl, MapBoxProps } from 'src/components/map';

// ----------------------------------------------------------------------

type CountryProps = {
  name: string;
  capital: string;
  latlng: number[];
  photoUrl: string;
  timezones: string[];
  country_code: string;
};

interface Props extends MapBoxProps {
  data?: CountryProps[];
}

function MapMarkersPopups({ data, ...other }: Props) {
  const [popupInfo, setPopupInfo] = useState<CountryProps | null>(null);

  return (
    <Map
      initialViewState={{
        zoom: 2,
      }}
      {...other}
    >
      <MapControl />
      <Source
        id="mapbox"
        type="raster"
        tiles={['https://vb9w1lc7-4444.brs.devtunnels.ms/api/v1/tiles/{z}/{x}/{y}.png']}
      />
      <Layer id="mapbox" type="raster" source="mapbox" />
    </Map>
  );
}

export default memo(MapMarkersPopups);
