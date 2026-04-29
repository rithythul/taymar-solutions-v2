import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taymar Solutions | Trusted Professional Services",
  description: "Modern professional solutions for your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
