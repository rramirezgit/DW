// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  series: number[];
  legendPosition?: 'top' | 'bottom' | 'right' | 'left';
  labels: string[];
};

export default function ChartDonut({ series, legendPosition = 'top', labels = [] }: Props) {
  const chartOptions = useChart({
    labels,
    stroke: {
      show: false,
    },
    legend: {
      position: legendPosition,
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
        },
      },
    },
  });

  return <Chart dir="ltr" type="donut" series={series} options={chartOptions} width={400} />;
}
