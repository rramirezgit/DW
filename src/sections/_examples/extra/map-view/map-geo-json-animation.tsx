import { memo, useReducer } from 'react';
import Map, { Layer, Source } from 'react-map-gl';
// components
import { MapControl, MapBoxProps } from 'src/components/map';

// ----------------------------------------------------------------------

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
        latitude: 18.904352072,
        longitude: -98.928550434,
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
      {/*
      <Source type="raster" url="mapbox://leonchavez.plaza">
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
