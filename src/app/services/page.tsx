import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Taymar Solutions",
  description: "Discover our professional sales outsourcing and cold outreach services.",
};

export default function Services() {
  const services = [
    {
      title: "Outbound Sales & Cold Calling",
      description: "We conduct targeted cold outreach to connect with decision-makers and generate interest in your product or service. Our approach focuses on real conversations — not scripts that get ignored."
    },
    {
      title: "Appointment Setting",
      description: "We qualify leads and book meetings directly onto your calendar with prospects who match your ideal customer profile, so your team can focus on closing."
    },
    {
      title: "Cold Email Outreach",
      description: "We design and execute outbound email campaigns that open doors. From messaging to targeting, we focus on driving responses — not just sending volume."
    },
    {
      title: "Lead Qualification",
      description: "Not every lead is worth your time. We filter and qualify prospects to ensure that the opportunities we pass along are relevant and sales-ready."
    },
    {
      title: "Commission-Based Sales Support",
      description: "Our model is built around performance. By working on a commission-first basis, we reduce upfront cost and align incentives with your growth."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Services</h1>
      <div className="mt-12 grid gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
