import styles from '@/styles/header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi';

const Header = () => {
  return (
    <header className={`responsive_width ${styles.header}`}>
      <Link href='/'>
        <Image alt='logo' height={80} width={80} className={styles.logo} src='/logo.svg' />
      </Link>
      <HiMenuAlt1 />
    </header>
  );
};

export default Header;
