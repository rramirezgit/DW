// @mui
import { styled } from '@mui/material/styles';
// utils
import { fNumber } from 'src/utils/format-number';
// components
import Chart, { useChart } from 'src/components/chart';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 380;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ mdUp, theme }) => ({
  height: CHART_HEIGHT,
  marginLeft: mdUp ? '50px !important' : '0px !important',
  width: mdUp ? '310px !important' : '100%',
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `180px !important`,
  },
  '& .apexcharts-legend': {
    inset: 'auto 0 0 !important',
    '& .apexcharts-legend-text': {
      width: mdUp ? 100 : '100%',
    },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  series: number[];
  labels: string[];
};

export default function ChartRadialBar({ series, labels = [] }: Props) {
  const mdUp = useResponsive('up', 'md');
  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    labels,
    legend: {
      position: mdUp ? 'right' : 'bottom',
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
    <StyledChart
      dir="ltr"
      type="radialBar"
      series={series}
      options={chartOptions}
      height={191}
      mdUp={mdUp}
    />
  );
}
