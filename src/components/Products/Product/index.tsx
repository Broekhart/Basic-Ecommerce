import { Product } from '@/shared/types/products';
import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/products/Products.module.css';

type Props = {
  product: Product;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <article className={styles.product}>
      <div className={styles.image}>
        <Image alt={product?.title} fill={true} src={product?.image?.src} />
      </div>
      <h4>{product.title}</h4>
      <p>da 10 €</p>
    </article>
  );
};

export default Product;
