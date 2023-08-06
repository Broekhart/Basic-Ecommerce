import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Roboto_Slab } from 'next/font/google';
import Menu from './Menu';
import { useMenu } from '../shared/wrappers/menuProvider';

const roboto_slab = Roboto_Slab({ subsets: ['latin'] });

const Layout = ({ children }: PropsWithChildren) => {
  const { isMenu } = useMenu();
  return (
    <>
      <main className={roboto_slab.className}>
        {isMenu && <Menu />}
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
