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
  data: CountryProps[];
}

function MapMarkersPopups({ data, ...other }: Props) {
  const [popupInfo, setPopupInfo] = useState<CountryProps | null>(null);

  const parkLayer: RasterLayer = {
    id: 'mapbox',
    type: 'raster',
    source: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/NDRE.tif',
  };

  return (
    <Map
      initialViewState={{
        zoom: 2,
      }}
      {...other}
    >
      <MapControl />

      {/* {data.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city.latlng[0]}
          longitude={city.latlng[1]}
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        />
      ))} */}

      {/* {popupInfo && (
        <MapPopup
          latitude={popupInfo.latlng[0]}
          longitude={popupInfo.latlng[1]}
          onClose={() => setPopupInfo(null)}
        >
          <Box sx={{ color: 'common.white' }}>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  height: '18px',
                  minWidth: '28px',
                  marginRight: '8px',
                  borderRadius: '4px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${popupInfo.country_code.toLowerCase()}.svg)`,
                }}
              />
              <Typography variant="subtitle2">{popupInfo.name}</Typography>
            </Box>

            <Typography component="div" variant="caption">
              Timezones: {popupInfo.timezones}
            </Typography>

            <Typography component="div" variant="caption">
              Lat: {popupInfo.latlng[0]}
            </Typography>

            <Typography component="div" variant="caption">
              Long: {popupInfo.latlng[1]}
            </Typography>

            <Image
              alt={popupInfo.name}
              src={popupInfo.photoUrl}
              ratio="4/3"
              sx={{ mt: 1, borderRadius: 1 }}
            />
          </Box>
        </MapPopup>
      )} */}
      <Source
        id="mapbox"
        type="raster"
        url="https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"
      >
        <Layer {...parkLayer} />
      </Source>
    </Map>
  );
}

export default memo(MapMarkersPopups);
