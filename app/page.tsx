import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';
import { delayRecommendedProducts, delayReviews } from '#/lib/constants';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct
        data={fetch(`https://app-router-api.vercel.app/api/products?id=1`)}
      />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts
          path="/streaming/node/product"
          data={fetch(
            // We intentionally delay the response to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/products?delay=${delayRecommendedProducts}&filter=1`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              cache: 'no-store',
            },
          )}
        />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews
          data={fetch(
            // We intentionally delay the response to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/reviews?delay=${delayReviews}`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              cache: 'no-store',
            },
          )}
        />
      </Suspense>
    </div>
  );
}
