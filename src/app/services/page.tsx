import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Taymar Solutions",
  description: "Discover our professional business services.",
};

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-6 text-lg text-slate-600">
        We offer tailored professional services to help your business grow and succeed.
      </p>
    </div>
  );
}
