import type { Metadata } from "next";
import {
  Building2,
  Factory,
  Stethoscope,
  Landmark,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Taymar Solutions",
  description:
    "Taymar Solutions serves businesses across real estate, manufacturing, healthcare, financial services, education, and professional services.",
};

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Real estate firms rely on consistent lead flow to keep their pipeline moving. We generate qualified introductions with property investors, commercial buyers, and developers.",
    painPoints: [
      "Long sales cycles with unpredictable lead flow",
      "Difficulty reaching decision-makers at scale",
      "High cost per acquisition from inbound channels",
    ],
    solution:
      "Multi-channel outreach targeting property professionals and investors with personalized messaging around portfolio opportunities and market timing.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "B2B manufacturing requires precise targeting. We connect manufacturers with procurement officers, supply chain leads, and operations directors who need their solutions.",
    painPoints: [
      "Small buyer universe with hard-to-reach decision-makers",
      "Complex sales processes requiring multiple touchpoints",
      "Seasonal demand fluctuations",
    ],
    solution:
      "Account-based outreach to procurement and operations leaders, with follow-up sequences tailored to manufacturing buying cycles and pain points.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Healthcare organizations need partners who understand compliance and long procurement cycles. We specialize in reaching hospital administrators, practice managers, and department heads.",
    painPoints: [
      "Regulated environment limits outreach approaches",
      "Multiple stakeholders per buying decision",
      "Long procurement and approval timelines",
    ],
    solution:
      "Research-driven outreach that maps organizational structures and targets the right stakeholders with compliant, value-focused messaging.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Financial services firms need trust-building from the first touchpoint. We generate warm introductions for wealth management, insurance, fintech, and lending businesses.",
    painPoints: [
      "Trust barrier in cold outreach",
      "Highly competitive market with noise-heavy messaging",
      "Regulatory constraints on communication",
    ],
    solution:
      "Professional, consultative outreach positioning your firm as a trusted advisor — not a cold vendor — with messaging focused on outcomes and expertise.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "EdTech companies and educational service providers need to reach administrators, principals, and district leaders. We navigate the institutional buying process for you.",
    painPoints: [
      "Institutional budget cycles dictate buying timelines",
      "Multiple approval layers within school districts and universities",
      "Value demonstration required before engagement",
    ],
    solution:
      "Targeted outreach to educational decision-makers with case-study-backed messaging that demonstrates ROI and addresses budget-cycle planning.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Consultancies, agencies, and SaaS companies need a steady flow of qualified conversations. We book meetings with the executives who can sign contracts.",
    painPoints: [
      "Service differentiation is hard to communicate at scale",
      "Long relationship-building cycles before conversion",
      "High cost per qualified meeting through traditional channels",
    ],
    solution:
      "Consultative outreach that communicates your unique value proposition with precision, targeting C-suite and VP-level decision-makers who have budget authority.",
  },
];

export default function Industries() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4 fade-in">
            Industries & Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl fade-in">
            Proven Across Sectors
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed fade-in">
            Our outbound approach adapts to each industry&apos;s unique buying
            dynamics, regulatory landscape, and decision-maker profiles.
          </p>
        </div>
      </section>

      {/* Industry Blocks */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {industries.map(
            ({ icon: Icon, title, description, painPoints, solution }, idx) => (
              <div
                key={title}
                className={`grid md:grid-cols-2 gap-10 fade-in ${
                  idx % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {title}
                    </h2>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  {/* Pain Points */}
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                    Common Pain Points
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {painPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-slate-600 text-sm"
                      >
                        <span className="text-accent shrink-0 mt-0.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {/* Solution */}
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Our Approach
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {solution}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold fade-in">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mt-4 text-lg text-slate-200 fade-in">
            We&apos;ve worked across many sectors. If your business needs pipeline
            growth, let&apos;s talk about how we can adapt our approach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 fade-in">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
