"use client";

import { useState } from "react";
import { Mail, Phone, Send, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    window.location.href = `mailto:sales@taymarsolutions.com?subject=Inquiry from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\nCompany: ${company}\n\n${message}`
    )}`;
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4 fade-in">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl fade-in">
            Let&apos;s Talk About Your Pipeline
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed fade-in">
            Ready to scale your outbound? Have questions about our approach?
            Reach out — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="md:col-span-2 space-y-8">
              <div className="fade-in">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Get in Touch
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Tell us about your business and goals. We&apos;ll figure out the
                  right approach for your pipeline.
                </p>
              </div>

              <div className="space-y-5 fade-in">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a
                      href="mailto:sales@taymarsolutions.com"
                      className="text-slate-500 hover:text-primary transition-colors text-sm"
                    >
                      sales@taymarsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a
                      href="tel:+15127668447"
                      className="text-slate-500 hover:text-primary transition-colors text-sm"
                    >
                      (512) 766-8447
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Location
                    </p>
                    <p className="text-slate-500 text-sm">
                      Austin, Texas
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 fade-in">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Commission-first model
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Minimal upfront cost. We earn when you earn. No retainers, no
                  long-term contracts.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5 fade-in">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className={inputClasses}
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    How can we help? <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your business, your goals, and what you're looking for in a sales partner..."
                  />
                </div>
                {submitted ? (
                  <p className="text-primary text-sm font-medium">
                    Opening your email client… If it doesn&apos;t open, email us at{" "}
                    <a
                      href="mailto:sales@taymarsolutions.com"
                      className="underline"
                    >
                      sales@taymarsolutions.com
                    </a>
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 fade-in">
            Not Ready to Reach Out?
          </h2>
          <p className="mt-4 text-lg text-slate-500 fade-in">
            That&apos;s okay. Learn more about what we do and how we help businesses
            like yours grow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 fade-in">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg border border-slate-300 hover:border-primary hover:bg-primary/5 transition-all"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-semibold hover:text-primary transition-colors"
            >
              About Taymar
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
