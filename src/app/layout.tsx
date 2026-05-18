import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Taymar Solutions, Pipeline that pays for itself.",
  description:
    "Commission-first outbound. We find your buyers, qualify them, and book the meetings. You only pay when we deliver.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EFEAE0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
