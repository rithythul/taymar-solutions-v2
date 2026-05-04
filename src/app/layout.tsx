import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer, FadeInWrapper } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Taymar Solutions | Pipeline Growth via Cold Outreach",
  description:
    "Performance-driven sales outsourcing. We generate qualified leads and set appointments so your team can focus on closing revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
