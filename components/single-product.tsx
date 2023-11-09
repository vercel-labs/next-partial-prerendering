import { Pricing } from '#/components/pricing';
import type { Product } from '#/types/product';
import { ProductRating } from '#/components/product-rating';
import Image from 'next/image';

export const SingleProduct = async ({ data }: { data: Promise<Response> }) => {
  const product = (await data.then((res) => res.json())) as Product;

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-2 md:order-1 md:col-span-1">
        <div className="space-y-2">
          <Image
            src={`/${product.image}`}
            className="block rounded-lg grayscale"
            alt={product.name}
            height={400}
            width={400}
            priority
          />

          <div className="flex gap-x-2">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
                priority
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
                priority
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:order-3 md:col-span-1">
        <Pricing product={product} />
      </div>

      <div className="col-span-full space-y-4 md:order-2 md:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {product.name}
        </div>

        <ProductRating rating={product.rating} />

        <div className="space-y-4 text-sm text-gray-200">
          <p>{product.description}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
