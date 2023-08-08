import fetcher from '@/shared/functions/fetcher';
import getProducts from '@/shared/functions/getProducts';
import { Product, ProductResponse } from '@/shared/types/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const title = `Gioielleria - ${product.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='responsive_width'>
        <h2>{product.title}</h2>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  const productsId = products.map((product) => product.id);

  const paths = productsId.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product } = await fetcher<ProductResponse>(`/products/${params?.id}.json`);

  return {
    props: {
      product,
    },
  };
};
