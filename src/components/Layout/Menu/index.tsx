import { menu } from '@/shared/variables/menu';
import styles from '@/styles/layout/menu/Menu.module.css';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav className='flex_column'>
        {menu.map((link) => (
          <Link key={link} href={`/category/${link.toLowerCase()}`}>
            {link}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
