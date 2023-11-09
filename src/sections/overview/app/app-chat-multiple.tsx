import {
  Autocomplete,
  Chip,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { random } from 'lodash';
import { useState } from 'react';
import { useResponsive } from 'src/hooks/use-responsive';
import ChartColumnMultiple from 'src/sections/_examples/extra/chart-view/chart-column-multiple';

export default function ChartColumnMultipleWithOptions() {
  const formats = [
    'NDVI',
    'EVI',
    'SAVI',
    'CI',
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

  const [formatsselected, setFormatsselected] = useState(() => ['NDVI', 'CI', 'EWI', 'LAI']);
  const [formatsselectedmobile, setFormatsselectedmobile] = useState(formats.slice(0, 6));
  const randomData = () => Array.from({ length: 6 }, () => random(-1, 1));

  const [series, setSeries] = useState(() =>
    formats.slice(0, 6).map((format) => ({ name: format, data: randomData() }))
  );

  const mdUp = useResponsive('up', 'md');

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormatsselected(newFormats);
    setSeries(
      newFormats.map((format) => ({
        name: format,
        data: series.find((serie) => serie.name === format)?.data || randomData(),
      }))
    );
  };

  const Options = (
    <>
      {mdUp && (
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
      )}
    </>
  );

  return (
    <>
      <Paper sx={{ p: 3, mt: 3 }} elevation={3}>
        <ChartColumnMultiple series={series} />
        {Options}
      </Paper>
      {!mdUp && (
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
              setSeries(
                (newValue || formats).map((format) => ({
                  name: format,
                  data: series.find((serie) => serie.name === format)?.data || randomData(),
                }))
              );
            }}
            options={formats}
            renderInput={(params) => <TextField {...params} />}
            renderTags={(selected, getTagProps) =>
              formatsselectedmobile.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option}
                  label={option}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))
            }
          />
        </Paper>
      )}
    </>
  );
}
