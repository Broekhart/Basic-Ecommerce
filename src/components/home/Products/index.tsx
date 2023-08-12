import { Product as ProductType } from '@/shared/types/products';
import Product from './Product';
import { FC } from 'react';
import styles from '@/styles/products/Products.module.css';
import Link from 'next/link';

type Props = {
  products: ProductType[];
};

const Products: FC<Props> = ({ products }) => {
  const slicedProducts = products.slice(0, 4);
  return (
    <section>
      <div className='between_center'>
        <h2>{products[0].product_type}</h2>
        <Link href={`/category/${products[0].product_type.toLowerCase()}`} className='button'>
          Approfondisci
        </Link>
      </div>
      <div className={styles.products}>
        {slicedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
