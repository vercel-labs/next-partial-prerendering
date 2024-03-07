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
    viewport: string;
  };
};

export default function Page({ searchParams }: Props) {
  const viewport = searchParams?.viewport

  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      {viewport === 'desktop' && (
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

      {viewport === 'mobile' && (
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
