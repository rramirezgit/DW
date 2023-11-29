import { useState, memo } from 'react';
import Map, { FillLayer, Layer, RasterLayer, Source } from 'react-map-gl';
// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import { MapPopup, MapMarker, MapControl, MapBoxProps } from 'src/components/map';

const coor = [
  [-99.19312337413432, 19.311296973197944],
  [-99.19316075742245, 19.31144046600981],
  [-99.19314952567221, 19.311449325539822],
  [-99.19329889118674, 19.311393953469373],
  [-99.19333275407554, 19.311280045151197],
  [-99.19330945238472, 19.31126137683593],
  [-99.19356241822244, 19.310731702053538],
  [-99.19295925647022, 19.311480966714512],
  [-99.19368932023647, 19.311373703107492],
  [-99.19379208236934, 19.31138129699349],
  [-99.19363383203748, 19.31125947836307],
  [-99.19369032606484, 19.311271343818085],
  [-99.19342579320073, 19.31132212795577],
  [-99.19401487335564, 19.311564815797833],
  [-99.19328363612296, 19.311534914903252],
];

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
      {coor.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city[0]}
          longitude={city[1]}
          // onClick={(event) => {
          //   event.originalEvent.stopPropagation();
          //   setPopupInfo(city);
          // }}
        />
      ))}

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
    </Map>
  );
}

export default memo(MapMarkersPopups);
