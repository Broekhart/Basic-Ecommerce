import styles from '@/styles/hero/Hero.module.css';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

const Hero: FC<Props> = (props) => {
  const { title, subtitle, image } = props;

  return (
    <section className={`${styles.hero} fill`} style={{ backgroundImage: `url(${image})` }}>
      <div className={`flex_column ${styles.content}`}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <button>Scoprili</button>
      </div>
    </section>
  );
};

export default Hero;
