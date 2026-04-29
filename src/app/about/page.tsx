import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Taymar Solutions",
  description: "Learn more about Taymar Solutions, our performance-driven sales outsourcing firm.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
      <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
        <p>
          Taymar Solutions, LLC is a performance-driven sales outsourcing firm focused on one thing: generating qualified opportunities for our clients.
        </p>
        <p>
          We partner with businesses that need consistent pipeline growth but don’t want the overhead and risk of building a full in-house outbound sales team. By operating on a commission-first model, we align our success directly with yours — we only win when you do.
        </p>
        <p>
          Our team specializes in cold outreach, lead qualification, and appointment setting across multiple channels, including phone and email. We combine structured processes with real human communication to create conversations that convert into revenue.
        </p>
        <p>
          Whether you’re an early-stage company looking to validate your offer or an established business aiming to scale outbound efforts, Taymar Solutions provides a flexible, results-focused solution.
        </p>
      </div>
    </div>
  );
}
