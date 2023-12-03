// @mui
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
// utils
import { alpha } from '@mui/material/styles';
import { fPercent, fCurrency } from 'src/utils/format-number';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

type ItemProps = {
  label: string;
  value: number;
  totalAmount: number;
  color: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  data: ItemProps[];
}

export default function EcommerceSalesOverview({ title, subheader, data, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={7} sx={{ px: 3, pt: 3, pb: 8 }} width="100%">
        {data.map((progress, index) => (
          <Stack key={progress.label} spacing={1} direction="row" width="100%">
            <Image alt={progress.label} src={`/assets/images/home/tree${index}.png`} />
            <ProgressItem key={progress.label} progress={progress} />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ProgressItemProps = {
  progress: ItemProps;
};

function ProgressItem({ progress }: ProgressItemProps) {
  return (
    <Stack spacing={2} width="100%">
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>

        <Typography variant="subtitle2">{fCurrency(progress.totalAmount)}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        sx={{
          /// color
          '&.MuiLinearProgress-root': {
            bgcolor: alpha(progress.color, 0.18),
          },
          '& .MuiLinearProgress-bar': {
            bgcolor: progress.color,
          },
        }}
      />
    </Stack>
  );
}
