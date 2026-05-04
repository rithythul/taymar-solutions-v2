import type { Metadata } from "next";
import {
  Phone,
  CalendarCheck,
  Mail,
  Filter,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Taymar Solutions",
  description:
    "Explore our full suite of outbound sales services — cold calling, appointment setting, cold email, lead qualification, and commission-based sales support.",
};

const services = [
  {
    icon: Phone,
    title: "Outbound Sales & Cold Calling",
    description:
      "We conduct targeted cold outreach to connect with decision-makers and generate genuine interest in your product or service. Our approach focuses on real conversations — not scripts that get ignored.",
    outcomes: [
      "Direct access to decision-makers in your target market",
      "Human-led conversations that build rapport and interest",
      "Structured call scripts refined through iterative testing",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setting",
    description:
      "We qualify leads and book meetings directly onto your calendar with prospects who match your ideal customer profile. Your team walks into every call with context.",
    outcomes: [
      "Pre-qualified prospects on your calendar",
      "Full context on every booked meeting",
      "Higher close rates from better-qualified opportunities",
    ],
  },
  {
    icon: Mail,
    title: "Cold Email Outreach",
    description:
      "We design and execute outbound email campaigns that open doors. From messaging strategy to list segmentation, we focus on driving responses — not just sending volume.",
    outcomes: [
      "Personalized messaging sequences tailored to your ICP",
      "Optimized send timing and follow-up cadences",
      "Measurable response rates with continuous improvement",
    ],
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description:
      "Not every lead is worth your time. We filter and qualify prospects against your criteria to ensure the opportunities we deliver are relevant and sales-ready.",
    outcomes: [
      "Fewer wasted sales calls on unqualified leads",
      "Clear qualification criteria aligned with your ICP",
      "Higher pipeline-to-close conversion rates",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Commission-Based Sales Support",
    description:
      "Our entire model is built around performance. By operating on a commission-first basis, we reduce upfront cost and align our incentives directly with your revenue growth.",
    outcomes: [
      "Minimal upfront financial commitment",
      "Full alignment between our success and yours",
      "Flexible engagement — scale based on results",
    ],
  },
];

const idealClients = [
  "B2B companies with a proven product or service seeking consistent pipeline",
  "Early-stage companies validating their market fit through outbound",
  "Established businesses scaling their sales operation without adding headcount",
  "Firms that have tried outbound internally without sustainable results",
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4 fade-in">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl fade-in">
            Full-Spectrum Outbound Sales Support
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed fade-in">
            From research to booked meetings, we handle the entire outbound
            pipeline so your team can focus on closing.
          </p>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 fade-in">
              Outcomes Over Activity
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed fade-in">
              We don&apos;t measure success by calls made or emails sent — we measure
              it by meetings booked, pipeline generated, and revenue influenced.
              Every service we provide is designed around outcomes, not vanity
              metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Blocks */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {services.map(({ icon: Icon, title, description, outcomes }, idx) => (
            <div
              key={title}
              className={`flex flex-col md:flex-row gap-8 bg-white rounded-xl p-8 border border-slate-200 fade-in ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{description}</p>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Outcomes & Benefits
                </h4>
                <ul className="space-y-3">
                  {outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <CheckCircle2
                        className="text-primary shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 fade-in">
                Who This Is For
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed fade-in">
                Our services are built for companies that need predictable
                pipeline growth and are ready to invest in results-driven
                outbound.
              </p>
            </div>
            <ul className="space-y-4">
              {idealClients.map((client) => (
                <li key={client} className="flex items-start gap-3 fade-in">
                  <ArrowRight
                    className="text-primary shrink-0 mt-1"
                    size={16}
                  />
                  <span className="text-slate-700 leading-relaxed">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold fade-in">
            Ready to Discuss Your Needs?
          </h2>
          <p className="mt-4 text-lg text-slate-200 fade-in">
            Tell us about your business and goals. We&apos;ll recommend the right
            approach — no pressure, no commitments.
          </p>
          <div className="mt-8 fade-in">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Inquire About Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
