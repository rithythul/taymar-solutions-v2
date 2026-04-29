import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Taymar Solutions",
  description: "Learn more about our mission and approach.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900">About Taymar Solutions</h1>
      <p className="mt-6 text-lg text-slate-600">
        We are dedicated to providing modern, professional business solutions. 
        Our approach is client-centered, focusing on efficiency and clarity.
      </p>
    </div>
  );
}
