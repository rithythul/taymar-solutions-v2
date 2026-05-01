"use client";
import { useState, type CSSProperties, type ReactNode } from "react";
import { Eyebrow } from "@/components/site/atoms";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid var(--line)",
  background: "var(--surface)",
  fontFamily: "'Geist', sans-serif",
  fontSize: 15,
  color: "var(--ink)",
  outline: "none",
  borderRadius: 0,
  transition: "border-color 160ms",
  boxSizing: "border-box",
};

function Field({ label, children, req, error }: { label: string; children: ReactNode; req?: boolean; error?: string | null }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: error ? "var(--accent)" : "var(--muted)" }}>
        <span>
          {label}
          {req && <span style={{ color: "var(--accent)" }}> *</span>}
        </span>
        {error && <span>{error}</span>}
      </span>
      {children}
    </label>
  );
}

type Form = {
  name: string;
  email: string;
  company: string;
  role: string;
  revenue: string;
  help: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<Form>({ name: "", email: "", company: "", role: "", revenue: "", help: "outreach", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string | null>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof Form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Required";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Tell us a bit more (10+ chars)";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (submitted) {
    return (
      <section style={{ padding: "120px 40px 200px", maxWidth: 920, margin: "0 auto", minHeight: "70vh" }}>
        <Eyebrow num="✓">Message received</Eyebrow>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.035em", fontWeight: 300, margin: "32px 0 32px" }}>
          Thanks, {form.name.split(" ")[0]}. <em style={{ color: "var(--accent)" }}>We&apos;ll be in touch within one business day.</em>
        </h1>
        <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--muted)", maxWidth: 600 }}>
          A founder or rep will email you to schedule a 30-minute discovery call. We&apos;ll come prepared with questions about {form.company} — no slides, no pitch.
        </p>
        <div style={{ marginTop: 48, padding: 32, background: "var(--surface)", border: "1px solid var(--line)" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>What you submitted</div>
          <dl style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "10px 24px", margin: 0, fontFamily: "'Geist', sans-serif", fontSize: 14 }}>
            <dt style={{ color: "var(--muted)" }}>Name</dt>
            <dd style={{ margin: 0 }}>{form.name}</dd>
            <dt style={{ color: "var(--muted)" }}>Email</dt>
            <dd style={{ margin: 0 }}>{form.email}</dd>
            <dt style={{ color: "var(--muted)" }}>Company</dt>
            <dd style={{ margin: 0 }}>{form.company}</dd>
            {form.role && (
              <>
                <dt style={{ color: "var(--muted)" }}>Role</dt>
                <dd style={{ margin: 0 }}>{form.role}</dd>
              </>
            )}
            {form.revenue && (
              <>
                <dt style={{ color: "var(--muted)" }}>Revenue stage</dt>
                <dd style={{ margin: 0 }}>{form.revenue}</dd>
              </>
            )}
            <dt style={{ color: "var(--muted)" }}>Looking for</dt>
            <dd style={{ margin: 0 }}>{form.help}</dd>
            <dt style={{ color: "var(--muted)" }}>Notes</dt>
            <dd style={{ margin: 0 }}>{form.message}</dd>
          </dl>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="01">Contact</Eyebrow>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 300, margin: "32px 0 0", maxWidth: 1100 }}>
          Tell us what you&apos;re selling. <em style={{ color: "var(--accent)" }}>We&apos;ll tell you straight if it&apos;s a fit.</em>
        </h1>
      </section>

      <section style={{ padding: "40px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Email</div>
              <a href="mailto:hello@taymarsolutions.com" style={{ fontFamily: "'Newsreader', serif", fontSize: 26, fontWeight: 400, letterSpacing: "-0.015em", color: "var(--ink)", textDecoration: "none" }}>
                hello@taymarsolutions.com
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Phone</div>
              <a href="tel:+18135550142" style={{ fontFamily: "'Newsreader', serif", fontSize: 26, fontWeight: 400, letterSpacing: "-0.015em", color: "var(--ink)", textDecoration: "none" }}>
                (813) 555-0142
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Service area</div>
              <div style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, lineHeight: 1.6, color: "var(--ink)" }}>
                Headquartered in Tampa, FL.
                <br />
                Working with B2B clients across
                <br />
                the United States and Canada.
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Hours</div>
              <div style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, lineHeight: 1.6, color: "var(--ink)" }}>
                Monday – Friday
                <br />
                8:00 AM – 6:00 PM ET
              </div>
            </div>
            <div style={{ marginTop: 24, padding: 24, background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8 }}>What happens next</div>
              <ol style={{ paddingLeft: 18, margin: 0, fontFamily: "'Geist', sans-serif", fontSize: 14, lineHeight: 1.7, color: "var(--ink)" }}>
                <li>We reply within one business day.</li>
                <li>30-min discovery call — your offer, your ICP.</li>
                <li>If we&apos;re a fit, we draft a commission structure and start.</li>
              </ol>
            </div>
          </div>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Field label="Name" req error={errors.name}>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} style={inputStyle} />
            </Field>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <Field label="Email" req error={errors.email}>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} style={inputStyle} />
              </Field>
              <Field label="Role">
                <input value={form.role} onChange={(e) => update("role", e.target.value)} placeholder="Founder / Head of Sales / etc." style={inputStyle} />
              </Field>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24 }}>
              <Field label="Company" req error={errors.company}>
                <input value={form.company} onChange={(e) => update("company", e.target.value)} style={inputStyle} />
              </Field>
              <Field label="Revenue stage">
                <select value={form.revenue} onChange={(e) => update("revenue", e.target.value)} style={inputStyle}>
                  <option value="">Select…</option>
                  <option>Pre-revenue</option>
                  <option>$0 – $500k ARR</option>
                  <option>$500k – $2M ARR</option>
                  <option>$2M – $10M ARR</option>
                  <option>$10M+ ARR</option>
                </select>
              </Field>
            </div>
            <Field label="What do you need help with?">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[
                  ["outreach", "Cold outreach"],
                  ["qualification", "Qualification"],
                  ["appointments", "Appointment setting"],
                ].map(([v, l]) => (
                  <label
                    key={v}
                    style={{
                      padding: "14px 16px",
                      border: form.help === v ? "1px solid var(--ink)" : "1px solid var(--line)",
                      background: form.help === v ? "var(--ink)" : "transparent",
                      color: form.help === v ? "var(--bg)" : "var(--ink)",
                      fontFamily: "'Geist', sans-serif",
                      fontSize: 14,
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 160ms",
                    }}
                  >
                    <input type="radio" name="help" value={v} checked={form.help === v} onChange={(e) => update("help", e.target.value)} style={{ display: "none" }} />
                    {l}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Tell us about your offer" req error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                placeholder="What do you sell, who buys it, and what's your average deal size?"
                style={{ ...inputStyle, resize: "vertical", fontFamily: "'Geist', sans-serif" }}
              />
            </Field>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>We never share your details. Period.</span>
              <button
                type="submit"
                style={{
                  background: "var(--accent)",
                  color: "white",
                  border: "none",
                  padding: "18px 32px",
                  fontFamily: "'Geist', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                Send message <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
