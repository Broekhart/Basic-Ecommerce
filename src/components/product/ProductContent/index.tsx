import { Product, VariantsEntity } from '@/shared/types/product';
import Link from 'next/link';
import styles from '@/styles/product/Product.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  product: Product;
  selectedVariant: VariantsEntity;
  setSelectedVariant: Dispatch<SetStateAction<VariantsEntity>>;
};

export default function ProductContent({ product, selectedVariant, setSelectedVariant }: Props) {
  return (
    <section className={styles.product_content}>
      <div className={`flex ${styles.breadcrumb}`}>
        <Link href='/'>Inizio</Link>
        <span>/</span>
        <Link href={`/category/${product.product_type.toLowerCase()}`}>{product.product_type}</Link>
      </div>
      <h2>{product.title}</h2>
      <b>€ {selectedVariant.price}</b>
      <div className={styles.measures}>
        <p className='grey'>Taglie prodotto</p>
        <div className='flex'>
          {product.variants?.map((variant) => (
            <span
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={
                selectedVariant.id === variant.id ? `${styles.boxes} ${styles.selected}` : styles.boxes
              }>
              {variant.weight} {variant.weight_unit}
            </span>
          ))}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: product.body_html }}
        className='flex_column'
        style={{ gap: '10px' }}></div>
      <button>Aggiungi al carrello</button>
    </section>
  );
}
