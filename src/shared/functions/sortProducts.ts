import { Product } from '../types/product';
import FILTERS from '../variables/filters';

const sortProducts = (products: Product[], filter: string) => {
  let finalProducts = [...products];

  if (filter === FILTERS.alphabetic) {
    finalProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return finalProducts;
};

export default sortProducts;
