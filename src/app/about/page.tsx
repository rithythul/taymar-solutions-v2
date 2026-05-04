import type { Metadata } from "next";
import Image from "next/image";
import { DollarSign, Radio, Target, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Taymar Solutions",
  description:
    "Learn about Taymar Solutions — our mission, approach, and the performance-driven philosophy behind our sales outsourcing.",
};

const values = [
  {
    icon: DollarSign,
    title: "Commission-First Model",
    description:
      "Minimal upfront cost. We earn through performance, not retainers — aligning incentives from day one.",
  },
  {
    icon: Radio,
    title: "Multi-Channel Reach",
    description:
      "Phone, email, LinkedIn — we meet prospects on the channels that drive engagement in your market.",
  },
  {
    icon: Target,
    title: "Results-Aligned",
    description:
      "Every metric we track ties back to your pipeline. Transparent reporting, real accountability.",
  },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4 fade-in">
            About Taymar Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl fade-in">
            Built to Generate Pipeline, Not Overhead
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed fade-in">
            A performance-driven sales outsourcing firm that partners with
            businesses ready to grow — without the cost and complexity of
            building in-house outbound teams.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 fade-in">
                Who We Are
              </h2>
              <div className="mt-6 space-y-5 text-slate-500 leading-relaxed fade-in">
                <p>
                  Taymar Solutions, LLC is a sales outsourcing firm focused on
                  one outcome: generating qualified opportunities for our clients.
                  We work with businesses that need consistent pipeline growth
                  but don&apos;t want the overhead and risk of a full in-house outbound
                  sales operation.
                </p>
                <p>
                  Our team specializes in cold outreach, lead qualification, and
                  appointment setting across multiple channels — phone, email, and
                  LinkedIn. We combine structured processes with real human
                  communication to create conversations that convert into revenue.
                </p>
                <p>
                  Whether you&apos;re an early-stage company validating your offer or
                  an established business scaling outbound efforts, Taymar
                  Solutions provides a flexible, results-focused partnership.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 fade-in">
                <Image
                  src="/sales-floor.jpg"
                  alt="Taymar Solutions sales floor"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 fade-in"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 fade-in">
              Our Mission & Approach
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed fade-in">
              We believe sales outsourcing should be transparent, accountable,
              and aligned with client outcomes. Our methodology is built on three
              principles:
            </p>
            <div className="mt-10 space-y-8">
              {[
                {
                  num: "01",
                  title: "Research Before Outreach",
                  text: "We map your ideal customer profile — industries, titles, pain points, and buying signals — before making first contact. Every conversation starts with context.",
                },
                {
                  num: "02",
                  title: "Multi-Channel Execution",
                  text: "We launch coordinated outreach across phone, email, and LinkedIn. Messaging is tuned to your market and tested iteratively for response optimization.",
                },
                {
                  num: "03",
                  title: "Qualify and Deliver",
                  text: "Interested prospects are qualified against your ICP criteria and booked directly onto your calendar. Your team focuses on closing — we handle everything upstream.",
                },
              ].map(({ num, title, text }) => (
                <div key={num} className="flex gap-5 fade-in">
                  <span className="text-3xl font-bold text-primary/20 shrink-0">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Founder Voice */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 mb-6 fade-in">
              <Image
                src="/founder.jpg"
                alt="Ben Marchiony, Founder"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <Quote className="text-primary/20 mb-4" size={48} />
            <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed fade-in">
              &ldquo;I started Taymar because I saw businesses spending a fortune on
              in-house sales teams that didn&apos;t perform. The model is broken —
              pay upfront, hope for results. We flipped it. We invest in your
              pipeline first, and we earn when you earn. That&apos;s the only model
              that makes sense.&rdquo;
            </blockquote>
            <div className="mt-6 fade-in">
              <p className="font-semibold text-slate-900">Ben Marchiony</p>
              <p className="text-sm text-slate-500">Founder, Taymar Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client-Centered Philosophy */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 fade-in">
              Why Clients Trust Us
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto fade-in">
              Our client relationships are built on transparency, accountability,
              and shared outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                title: "No Retainers",
                text: "Our commission-first model means minimal upfront cost. We earn through results — if you don't close, we don't get paid.",
              },
              {
                title: "Full Transparency",
                text: "You get clear reporting on every touchpoint — calls made, emails sent, responses received, and meetings booked.",
              },
              {
                title: "Flexible Engagement",
                text: "No long-term contracts. Scale up or down based on results. We earn your continued partnership through performance.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 border border-slate-200 fade-in"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold fade-in">
            Want to Know More?
          </h2>
          <p className="mt-4 text-lg text-slate-200 fade-in">
            Let&apos;s have a conversation about your pipeline goals and how we can help.
          </p>
          <div className="mt-8 fade-in">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
