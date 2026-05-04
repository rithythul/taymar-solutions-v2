import {
  Phone,
  CalendarCheck,
  Mail,
  Filter,
  Target,
  ArrowRight,
  CheckCircle2,
  Building2,
  Factory,
  Stethoscope,
  Landmark,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Outbound Sales & Cold Calling",
    description:
      "Targeted cold outreach to decision-makers. Real conversations, not ignored scripts.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setting",
    description:
      "We qualify leads and book meetings with prospects who match your ICP.",
  },
  {
    icon: Mail,
    title: "Cold Email Outreach",
    description:
      "Data-driven email campaigns designed to drive responses, not just volume.",
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description:
      "Filter and qualify prospects to ensure every opportunity is sales-ready.",
  },
];

const whyChoose = [
  "Commission-first model — we only win when you do",
  "Multi-channel outreach across phone, email, and LinkedIn",
  "ICP-targeted research before first contact",
  "200+ meetings booked and counting",
  "Dedicated team, not a fragmented freelancer",
  "Transparent reporting tied to your pipeline",
];

const industries = [
  { icon: Building2, label: "Real Estate" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Landmark, label: "Financial Services" },
  { icon: GraduationCap, label: "Education" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4 fade-in">
              Performance-Driven Sales Outsourcing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight fade-in">
              We Build Your Pipeline.
              <br />
              <span className="text-slate-200">You Close the Revenue.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed fade-in">
              Taymar Solutions handles cold outreach, lead qualification, and
              appointment setting — so your sales team can focus on what they do
              best.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 fade-in">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Schedule a Consultation
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
        </div>
      </section>

      {/* Intro / Company Overview */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 fade-in">
              Your Outsourced Sales Engine
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed fade-in">
              Taymar Solutions, LLC is a performance-driven sales outsourcing firm
              that generates qualified opportunities for businesses ready to scale.
              We partner with companies that need consistent pipeline growth
              without the overhead of building an in-house outbound team.
            </p>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed fade-in">
              Our commission-first model aligns our success with yours — minimal
              upfront cost, maximum accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 fade-in">
              What We Do
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto fade-in">
              End-to-end outbound sales support, from research to booked meetings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all fade-in"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center fade-in">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              Explore all services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Taymar */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 fade-in">
                Why Choose Taymar?
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed fade-in">
                We&apos;re not another agency. We&apos;re a results-aligned partner that
                earns through performance, not retainers.
              </p>
            </div>
            <ul className="space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 fade-in">
                  <CheckCircle2
                    className="text-primary shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 fade-in">
              Industries We Serve
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto fade-in">
              Proven results across sectors where outbound outreach drives growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md hover:border-primary/30 transition-all fade-in"
              >
                <Icon className="text-primary mx-auto mb-3" size={28} />
                <p className="text-sm font-medium text-slate-700">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center fade-in">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              See how we help each industry
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold fade-in">
            Ready to Scale Your Pipeline?
          </h2>
          <p className="mt-4 text-lg text-slate-200 fade-in">
            Book a free consultation. No commitments, no retainers — just a
            conversation about growth.
          </p>
          <div className="mt-8 fade-in">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Schedule a Call
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
