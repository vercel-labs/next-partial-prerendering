import type { Product } from '#/types/product';
import { Ping } from '#/components/ping';
import { ProductPrice } from '#/components/product-price';
import { dinero, type DineroSnapshot } from 'dinero.js';

export function Pricing({ product }: { product: Product }) {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />
      <Ping />
    </div>
  );
}
