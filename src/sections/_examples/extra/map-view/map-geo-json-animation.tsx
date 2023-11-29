import { memo } from 'react';
import Map, { Layer, Source } from 'react-map-gl';
// components
import { MapControl, MapBoxProps, MapMarker } from 'src/components/map';

// ----------------------------------------------------------------------
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

function MapGeoJSONAnimation({ ...other }: MapBoxProps) {
  // const [layersVisibility, setLayersVisibility] = useReducer(
  //   (state, updates) => ({ ...state, ...updates }),
  //   {}
  // );
  return (
    <Map
      style={{
        borderRadius: '14px',
      }}
      initialViewState={{
        latitude: 19.311296973197944,
        longitude: -99.19312337413432,
        zoom: 16,
      }}
      {...other}
    >
      <MapControl />

      <Source type="raster" url="mapbox://leonchavez.siembra">
        <Layer
          id="layer"
          source="layer"
          type="raster"
          layout={{
            visibility: 'visible',
          }}
          paint={{
            'raster-opacity': 1,
          }}
        />
      </Source>

      {coor.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city[1]}
          longitude={city[0]}
          // onClick={(event) => {
          //   event.originalEvent.stopPropagation();
          //   setPopupInfo(city);
          // }}
        />
      ))}

      {/* <Source type="raster" url="mapbox://leonchavez.plaza">
        <Layer id="plaza" source="plaza" type="raster" />
      </Source> */}

      {/* 
      {layers.map((layer) => (
        <Source key={layer.id} type="raster" url={`mapbox://leonchavez.${layer.id}`}>
          <Layer
            id={layer.id}
            source={layer.id}
            type="raster"
            visibility={selectedLayer === layer.id ? 'visible' : 'none'}
          />
        </Source>
      ))} */}
    </Map>
  );
}

export default memo(MapGeoJSONAnimation);
