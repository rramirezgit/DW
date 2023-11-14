import { useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// routes
import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';
//
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo') || paths.dashboard.root;

  const { loginWithRedirect } = useAuth0();

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      loginWithRedirect();
    }
  }, [authenticated, loginWithRedirect]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
