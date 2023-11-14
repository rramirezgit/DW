// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import { useAuth0 } from '@auth0/auth0-react';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  const { loginWithRedirect } = useAuth0();
  return (
    // component={RouterLink} href={PATH_AFTER_LOGIN}
    <Button variant="outlined" sx={{ mr: 1, ...sx }} onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
}
