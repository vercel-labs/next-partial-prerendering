import { ProductCurrencySymbol } from '#/components/product-currency-symbol';
import { allocate, toDecimal, transformScale, up, type Dinero } from 'dinero.js';

export const ProductSplitPayments = ({ price }: { price: Dinero<number> }) => {
  // only offer split payments for more expensive items
  if (Number(toDecimal(price)) < 150) {
    return null;
  }

  const [perMonth] = allocate(price, [1, 2]);
  return (
    <div className="text-sm text-gray-400">
      Or <ProductCurrencySymbol dinero={price} />
      {toDecimal(transformScale(perMonth, 0, up))}/month for 3 months
    </div>
  );
};
