/* eslint-disable import/no-extraneous-dependencies */
import { memo, useEffect } from 'react';
// components
import GeoTIFF from 'ol/source/GeoTIFF';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import TileLayer from 'ol/layer/WebGLTile';
import 'ol/ol.css';
import { MapBoxProps } from 'src/components/map';

//

// ----------------------------------------------------------------------

interface Props extends MapBoxProps {
  themes: {
    [key: string]: string;
  };
}

function MapChangeTheme({ themes, ...other }: Props) {
  useEffect(() => {
    const source = new GeoTIFF({
      sources: [
        {
          url: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/RGB.tif',
        },
      ],
    });
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source,
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div id="map" style={{ width: '600px', height: '500px' }} />;
}

export default memo(MapChangeTheme);
