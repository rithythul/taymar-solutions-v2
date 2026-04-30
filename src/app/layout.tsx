import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taymar Solutions | Pipeline Growth via Cold Outreach",
  description: "Performance-driven sales outsourcing. We generate qualified leads; you close the revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#110c0c] text-white">
        <header className="sticky top-0 bg-[#110c0c]/80 backdrop-blur-md border-b border-neutral-800">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-tight text-white">TAYMAR</a>
            <div className="space-x-6 text-sm font-medium text-neutral-400">
              <a href="/about" className="hover:text-white">About</a>
              <a href="/services" className="hover:text-white">Services</a>
              <a href="/contact" className="px-4 py-2 bg-[#ff2e2e] text-white rounded hover:bg-[#e62828] transition">Contact</a>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} Taymar Solutions, LLC. Performance-driven results.
        </footer>
      </body>
    </html>
  );
}
