// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};

export default function ChartColumnMultiple({ series }: Props) {
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      min: -1,
      tickAmount: 4,
      labels: {
        formatter: (value: number) => `${value}`,
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value}`,
      },
    },
    plotOptions: { bar: { columnWidth: '30%' } },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}
