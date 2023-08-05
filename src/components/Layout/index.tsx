import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Roboto_Slab } from 'next/font/google';

const roboto_slab = Roboto_Slab({ subsets: ['latin'] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={roboto_slab.className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
