import { useMenu } from '@/components/shared/wrappers/menuProvider';
import styles from '@/styles/header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';

const Header = () => {
  const { isMenu, setIsMenu } = useMenu();

  useEffect(() => {
    document.body.style.overflow = isMenu ? 'hidden' : 'visible';
  }, [isMenu]);

  return (
    <header className={`responsive_width ${styles.header}`}>
      <Link href='/'>
        <Image
          alt='logo'
          height={80}
          width={80}
          className={styles.logo}
          src={isMenu ? '/white_logo.svg' : '/logo.svg'}
        />
      </Link>
      <HiMenuAlt1
        className={isMenu ? `${styles.svg} ${styles.white}` : styles.svg}
        onClick={() => setIsMenu((prev) => !prev)}
      />
    </header>
  );
};

export default Header;
