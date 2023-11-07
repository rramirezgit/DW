'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import EcommerceWidgetSummary from '../../e-commerce/ecommerce-widget-summary';
//

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid xs={12} md={6}>
            <EcommerceWidgetSummary
              title="Product Sold"
              percent={2.6}
              total={765}
              chart={{
                series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
