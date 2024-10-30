import type { Product } from '#/types/product';
import { ProductEstimatedArrival } from '#/components/product-estimated-arrival';
import { ProductLowStockWarning } from '#/components/product-low-stock-warning';
import { ProductSplitPayments } from '#/components/product-split-payments';
import { ProductUsedPrice } from '#/components/product-used-price';
import { dinero, type DineroSnapshot } from 'dinero.js';
import { delayShippingEstimate, withDelay } from '#/lib/delay';

export async function UserSpecificDetails({
  productId,
}: {
  productId: string;
}) {
  const data = await withDelay(
    fetch(
      `https://app-router-api.vercel.app/api/products?id=${productId}&filter=price,usedPrice,leadTime,stock`,
    ),
    delayShippingEstimate,
  );

  const product = (await data.json()) as Product;
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <>
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </>
  );
}
