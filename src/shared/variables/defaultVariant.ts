import { VariantsEntity } from '../types/product';

const defaultVariant: VariantsEntity = {
  id: 0,
  product_id: 0,
  title: '',
  price: '0',
  sku: null,
  position: 0,
  inventory_policy: '',
  compare_at_price: null,
  fulfillment_service: '',
  inventory_management: null,
  option1: '',
  option2: null,
  option3: null,
  created_at: '',
  updated_at: '',
  taxable: false,
  barcode: null,
  grams: 0,
  image_id: null,
  weight: 0,
  weight_unit: '',
  inventory_item_id: 0,
  inventory_quantity: 0,
  old_inventory_quantity: 0,
  requires_shipping: false,
  admin_graphql_api_id: '',
};

export default defaultVariant;
