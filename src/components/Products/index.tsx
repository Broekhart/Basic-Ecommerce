import { Product as ProductType } from '@/shared/types/products';
import Product from './Product';
import { FC } from 'react';
import styles from '@/styles/products/Products.module.css';

type Props = {
  products: ProductType[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <section>
      <h2>{products[0].product_type}</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
