import { useMenu } from '@/components/shared/wrappers/MenuProvider';
import styles from '@/styles/layout/header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { HiMenuAlt1, HiShoppingCart } from 'react-icons/hi';

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
      <div className='flex' style={{ gap: '20px' }}>
        <HiMenuAlt1
          className={isMenu ? `${styles.svg} ${styles.white}` : styles.svg}
          onClick={() => setIsMenu((prev) => !prev)}
        />
        <HiShoppingCart className={isMenu ? `${styles.svg} ${styles.white}` : styles.svg} />
      </div>
    </header>
  );
};

export default Header;
