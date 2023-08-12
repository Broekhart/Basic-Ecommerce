import styles from '@/styles/layout/footer/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section
        className='responsive_width flex'
        style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='flex_column' style={{ gap: '10px' }}>
          <h4>Seguimi sui social:</h4>
          <ins>Instagram</ins>
          <ins>Facebook</ins>
        </div>
        <Image alt='logo' height={80} width={80} className={styles.logo} src='/white_logo.svg' />
      </section>
    </footer>
  );
};

export default Footer;
