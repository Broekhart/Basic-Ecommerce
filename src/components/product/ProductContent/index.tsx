import { Product } from '@/shared/types/product';
import Link from 'next/link';
import styles from '@/styles/category/Category.module.css';

type Props = {
  product: Product;
};

export default function ProductContent({ product }: Props) {
  return (
    <section>
      <div className={`flex ${styles.breadcrumb}`}>
        <Link href='/'>Inizio</Link>
        <span>/</span>
        <Link href={`/category/${product.product_type.toLowerCase()}`}>{product.product_type}</Link>
      </div>
      <h2>{product.title}</h2>
    </section>
  );
}
