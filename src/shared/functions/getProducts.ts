import { CollectionResponse } from '../types/collections';
import { ProductsResponse } from '../types/products';
import fetcher from './fetcher';

const getProducts = async () => {
  const collections = await fetcher<CollectionResponse>('/collection_listings.json');
  const [, , jewlery] = collections.collection_listings;
  const { collection_id } = jewlery;

  const { products } = await fetcher<ProductsResponse>(`/collections/${collection_id}/products.json`);

  return products;
};

export default getProducts;
