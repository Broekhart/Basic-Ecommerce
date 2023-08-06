import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { useMenu } from './MenuProvider';

const ResetGlobalState = ({ children }: PropsWithChildren): JSX.Element => {
  const router = useRouter();
  const { setIsMenu } = useMenu();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenu(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return children as JSX.Element;
};

export default ResetGlobalState;
