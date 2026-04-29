import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Taymar Solutions",
  description: "Get in touch with Taymar Solutions.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-6 text-lg text-slate-600">
        Ready to scale your outbound efforts? Get in touch with us at:
      </p>
      <div className="mt-8 space-y-4">
        <p className="text-xl">
          <a href="mailto:ben@taymarsolutions.com" className="text-slate-900 font-semibold hover:underline">ben@taymarsolutions.com</a>
        </p>
        <p className="text-xl">
          <a href="mailto:sales@taymarsolutions.com" className="text-slate-900 font-semibold hover:underline">sales@taymarsolutions.com</a>
        </p>
      </div>
    </div>
  );
}
