import { Product } from '@/shared/types/products';
import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/products/Products.module.css';
import Link from 'next/link';

type Props = {
  product: Product;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <article className={styles.product}>
        <div className={styles.image}>
          <Image alt={product?.title} fill={true} src={product?.image?.src} />
        </div>
        <h4>{product.title}</h4>
        <p>da 10 €</p>
      </article>
    </Link>
  );
};

export default Product;
