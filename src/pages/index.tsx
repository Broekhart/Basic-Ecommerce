import Head from 'next/head';
import Hero from '@/components/Hero';
import { jewelry } from '@/shared/variables/hero';
import { GetStaticProps } from 'next';
import { CollectionResponse } from '@/shared/types/collections';
import fetcher from '@/shared/functions/fetcher';
import { Product as ProductType, ProductResponse } from '@/shared/types/products';
import productsByType from '@/shared/functions/productsByType';
import Products from '@/components/Products';

type Props = {
  filteredProducts: Record<string, ProductType[]>;
};

export default function Home({ filteredProducts }: Props) {
  const { title, subtitle, image } = jewelry;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero title={title} subtitle={subtitle} image={image} />
      <section className='responsive_width' style={{ paddingBlock: '40px' }}>
        {Object.entries(filteredProducts).map(([key, products]) => (
          <Products key={key} products={products} />
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const collections = await fetcher<CollectionResponse>('/collection_listings.json');
  const [, , jewlery] = collections.collection_listings;
  const { collection_id } = jewlery;

  const { products } = await fetcher<ProductResponse>(`/collections/${collection_id}/products.json`);
  const uniqueTypes = [...new Set(products.map((product) => product.product_type))];

  const filteredProducts = productsByType(products, uniqueTypes);

  return {
    props: {
      filteredProducts,
    },
  };
};
