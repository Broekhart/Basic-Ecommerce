export interface CollectionResponse {
  collection_listings: Collection[];
}

export interface Collection {
  collection_id: number;
  updated_at: string;
  body_html: string;
  default_product_image: DefaultProductImage;
  handle: string;
  image?: null;
  title: string;
  sort_order: string;
  published_at: string;
}
export interface DefaultProductImage {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  src: string;
  variant_ids?: null[] | null;
  width: number;
  height: number;
}
