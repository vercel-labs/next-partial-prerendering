import { Boundary } from '#/components/boundary';
import { CartCountProvider } from '#/components/cart-count-context';
import { Header } from '#/components/header';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-partial-prerendering.vercel.app/'),
  title: 'Next.js Partial Prerendering',
  description: 'A demo of Next.js using Partial Prerendering.',
  openGraph: {
    title: 'Next.js Partial Prerendering',
    description: 'A demo of Next.js using Partial Prerendering.',
    images: [`/api/og?title=Next.js Partial Prerendering`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 lg:p-6">
              <h1 className="text-xl font-medium">
                Next.js Partial Prerendering Demo
              </h1>
              <div className="prose prose-sm prose-invert mb-8 mt-4 max-w-none text-gray-300">
                <ul>
                  <li>
                    Primary product information is loaded first as part of the
                    initial static response.
                  </li>
                  <li>
                    Then, personalized dynamic details (that might be slower)
                    like ship date, other recommended products, and customer
                    reviews are progressively streamed in, denoted with{' '}
                    <span className="text-vercel-pink font-bold">
                      pink dots
                    </span>
                    .
                  </li>
                  <li>Try refreshing the page to restart the demo.</li>
                </ul>
              </div>
              <Boundary
                animateRerendering={false}
                labels={['Demo']}
                size="small"
              >
                <CartCountProvider>
                  <div className="space-y-10">
                    <Header />

                    {children}
                  </div>
                </CartCountProvider>
              </Boundary>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
