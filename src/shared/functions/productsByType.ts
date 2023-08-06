import { Product } from '../types/products';

const productsByType = (products: Product[], types: string[]) => {
  const filteredProducts: Record<string, Product[]> = {};

  for (const type of types) {
    filteredProducts[type] = products.filter((product) => product.product_type === type);
  }

  return filteredProducts;
};

export default productsByType;
