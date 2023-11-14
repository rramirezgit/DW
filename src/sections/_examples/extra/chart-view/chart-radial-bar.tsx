// @mui
import { styled } from '@mui/material/styles';
// utils
import { fNumber } from 'src/utils/format-number';
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 380;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  marginLeft: '50px !important',
  width: '310px !important',
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `180px !important`,
  },
  '& .apexcharts-legend': {
    '& .apexcharts-legend-text': {
      width: 100,
    },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  series: number[];
  labels: string[];
};

export default function ChartRadialBar({ series, labels = [] }: Props) {
  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    labels,
    legend: {
      position: 'right',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '68%',
        },
        dataLabels: {
          value: {
            offsetY: 8,
          },
          total: {
            // porcentaje
            formatter: () => `${fNumber(series[0])}%`,
          },
        },
      },
    },
  });

  return (
    <StyledChart dir="ltr" type="radialBar" series={series} options={chartOptions} height={191} />
  );
}
