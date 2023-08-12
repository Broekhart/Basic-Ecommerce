import Layout from '@/components/Layout';
import { MenuProvider } from '@/components/shared/wrappers/MenuProvider';
import '@/styles/globals.css';
import '@/styles//shared/colors.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}
