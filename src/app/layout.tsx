import type { Metadata } from "next";

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
      <body className="antialiased bg-white text-slate-900">
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-slate-200">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-tight text-slate-900">TAYMAR</a>
            <div className="space-x-6 text-sm font-medium text-slate-600">
              <a href="/about" className="hover:text-slate-900">About</a>
              <a href="/services" className="hover:text-slate-900">Services</a>
              <a href="/contact" className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition">Contact</a>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Taymar Solutions, LLC. Performance-driven results.
        </footer>
      </body>
    </html>
  );
}
