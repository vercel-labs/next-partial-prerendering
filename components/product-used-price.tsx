import { Product } from '#/types/product';
import { dinero, toDecimal, transformScale, up, type DineroSnapshot } from 'dinero.js';

export const ProductUsedPrice = ({
  usedPrice: usedPriceRaw,
}: {
  usedPrice: Product['usedPrice'];
}) => {
  const usedPrice = dinero(usedPriceRaw as DineroSnapshot<number>);

  return (
    <div className="text-sm">
      <div className="text-gray-400">More buying choices</div>
      <div className="text-gray-200">
        ${toDecimal(transformScale(usedPrice, 0, up))} (used)
      </div>
    </div>
  );
};
