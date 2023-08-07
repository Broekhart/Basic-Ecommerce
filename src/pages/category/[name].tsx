import Product from '@/components/Products/Product';
import productStyles from '@/styles/products/Products.module.css';
import styles from '@/styles/category/Category.module.css';
import fetcher from '@/shared/functions/fetcher';
import { CollectionResponse } from '@/shared/types/collections';
import { Product as ProductType, ProductResponse } from '@/shared/types/products';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import getProducts from '@/shared/functions/getProducts';

type Props = {
  filteredProducts: ProductType[];
};

export default function Category({ filteredProducts }: Props) {
  const category = filteredProducts[0].product_type;
  const title = `Gioielleria - ${category}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='responsive_width'>
        <h2>{category}</h2>
        <div className={styles.filter}>
          <ins>Filtra e ordina</ins>
        </div>
        <div className={productStyles.products}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  const uniqueTypes = [...new Set(products.map((product) => product.product_type))];

  const paths = uniqueTypes.map((type) => {
    return {
      params: { name: type },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await getProducts();

  const filteredProducts = products.filter((product) => product.product_type.toLowerCase() === params?.name);

  return {
    props: {
      filteredProducts,
    },
  };
};