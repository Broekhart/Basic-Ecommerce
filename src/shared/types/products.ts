export interface ProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix?: null;
  status: string;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  options?: OptionsEntity[] | null;
  images?: ImagesEntityOrImage[] | null;
  image: ImagesEntityOrImage;
}
export interface OptionsEntity {
  id: number;
  product_id: number;
  name: string;
  position: number;
}
export interface ImagesEntityOrImage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: null;
  width: number;
  height: number;
  src: string;
  variant_ids?: null[] | null;
  admin_graphql_api_id: string;
}
