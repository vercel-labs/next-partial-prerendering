import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { CartCountProvider } from '#/components/cart-count-context';
import { Header } from '#/components/header';
import { Ping } from '#/components/ping';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <>
      <h1 className="text-xl font-medium text-gray-300">
        Next.js Partial Prerendering Demo
      </h1>
      <div className="prose prose-sm prose-invert mb-8 mt-4 max-w-none">
        <ul>
          <li>
            Primary product information is loaded first as part of the initial
            response.
          </li>
          <li>
            Secondary, more personalized details (that might be slower) like
            ship date, other recommended products, and customer reviews are
            progressively streamed in. These are highlighted with a{' '}
            <span className="text-vercel-pink">pulsating dot</span>.
          </li>
          <li>Try refreshing the page to restart the demo.</li>
        </ul>
      </div>
      <CartCountProvider>
        <div className="space-y-10">
          <Header />

          <div className="space-y-8 lg:space-y-14">
            {/* @ts-expect-error Async Server Component */}
            <SingleProduct
              data={fetch(
                `https://app-router-api.vercel.app/api/products?id=1`,
              )}
            />

            <div className="relative">
              <div className="absolute -left-4 top-2">
                <Ping />
              </div>
            </div>

            <Suspense fallback={<RecommendedProductsSkeleton />}>
              {/* @ts-expect-error Async Server Component */}
              <RecommendedProducts
                path="/streaming/node/product"
                data={fetch(
                  // We intentionally delay the reponse to simulate a slow data
                  // request that would benefit from streaming
                  `https://app-router-api.vercel.app/api/products?delay=500&filter=1`,
                  {
                    // We intentionally disable Next.js Cache to better demo
                    // streaming
                    cache: 'no-store',
                  },
                )}
              />
            </Suspense>

            <div className="relative">
              <div className="absolute -left-4 top-2">
                <Ping />
              </div>
            </div>

            <Suspense fallback={<ReviewsSkeleton />}>
              {/* @ts-expect-error Async Server Component */}
              <Reviews
                data={fetch(
                  // We intentionally delay the reponse to simulate a slow data
                  // request that would benefit from streaming
                  `https://app-router-api.vercel.app/api/reviews?delay=1000`,
                  {
                    // We intentionally disable Next.js Cache to better demo
                    // streaming
                    cache: 'no-store',
                  },
                )}
              />
            </Suspense>
          </div>
        </div>
      </CartCountProvider>
    </>
  );
}
