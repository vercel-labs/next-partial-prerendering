import "./globals.css";

export const metadata = {
  metadataBase: "https://next-partial-prerendering.vercel.app",
  title: "Next.js Partial Prerendering",
  description:
    "HTML, staticly and dynamically rendered in a city near you, using Partial Prerendering",
  twitter: {
    card: "summary_large_image",
    title: "Next.js Partial Prerendering",
    description:
      "HTML, staticly and dynamically rendered in a city near you, using Partial Prerendering",
    creator: "@nextjs",
  },
};

export const viewport = {
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
