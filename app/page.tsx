import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

type Props = {
  searchParams: {
    abTest: string;
  };
};

export default function Page({ searchParams }: Props) {
  const aBTestPath = searchParams?.abTest ?? 'A';

  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      {aBTestPath === 'A' && (
        <>
          <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts />
          </Suspense>

          <Ping />

          <Suspense fallback={<ReviewsSkeleton />}>
            <Reviews />
          </Suspense>
        </>
      )}

      {aBTestPath === 'B' && (
        <>
          <Ping />

          <Suspense fallback={<ReviewsSkeleton />}>
            <Reviews />
          </Suspense>

          <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts />
          </Suspense>
        </>
      )}
    </div>
  );
}
