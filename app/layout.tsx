import { Boundary } from '#/ui/boundary';
import { CartCountProvider } from '#/app/streaming/_components/cart-count-context';
import { Header } from '#/app/streaming/_components/header';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://app-router.vercel.app/'),
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  openGraph: {
    title: 'Next.js App Router Playground',
    description:
      'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=Next.js App Router`],
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
              <h1 className="text-xl font-medium text-gray-300">
                Next.js Partial Prerendering Demo
              </h1>
              <div className="prose prose-sm prose-invert mb-8 max-w-none">
                <ul>
                  <li>
                    Primary product information is loaded first as part of the
                    initial response.
                  </li>
                  <li>
                    Secondary, more personalized details (that might be slower)
                    like ship date, other recommended products, and customer
                    reviews are progressively streamed in.
                  </li>
                  <li>
                    Try refreshing or navigating to other recommended products.
                  </li>
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
