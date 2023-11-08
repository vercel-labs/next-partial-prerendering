import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://next-partial-prerendering.vercel.app'),
  title: 'Next.js Partial Prerendering',
  description: 'This is a demo of Next.js using Partial Prerendering.',
  openGraph: {
    title: 'Next.js Partial Prerendering',
    description: 'This is a demo of Next.js using Partial Prerendering.',
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
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')]">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
