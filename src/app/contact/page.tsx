"use client";
import { useState, type CSSProperties, type ReactNode } from "react";
import { Eyebrow, Headline } from "@/components/site/atoms";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  border: "2px solid var(--line)",
  background: "var(--paperRaised)",
  fontFamily: "var(--body)",
  fontSize: 16,
  color: "var(--ink)",
  outline: "none",
  borderRadius: 0,
  transition: "border-color 160ms",
  boxSizing: "border-box",
};

function Field({ label, children, req, error }: { label: string; children: ReactNode; req?: boolean; error?: string | null }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: error ? "var(--rust)" : "var(--ink)" }}>
        <span>
          {label}
          {req && <span style={{ color: "var(--rust)" }}> *</span>}
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
        <div style={{ marginTop: 32 }}>
          <Headline size="xl" tag="h1">
            Thanks, {form.name.split(" ")[0]}.
            <br />
            <span style={{ color: "var(--rust)" }}>We&apos;ll email back within one business day.</span>
          </Headline>
        </div>
        <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.6, color: "var(--inkSoft)", maxWidth: 600, marginTop: 32 }}>
          We&apos;ll come prepared with questions about {form.company}. No slides, no pitch. If we don&apos;t think we&apos;re a fit, we&apos;ll say so and point you somewhere that is.
        </p>
        <div style={{ marginTop: 48, padding: 32, background: "var(--ink)", color: "var(--paper)" }}>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 20 }}>What you sent</div>
          <dl style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 24px", margin: 0, fontFamily: "var(--body)", fontSize: 15 }}>
            <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Name</dt>
            <dd style={{ margin: 0, color: "var(--paper)" }}>{form.name}</dd>
            <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Email</dt>
            <dd style={{ margin: 0, color: "var(--paper)" }}>{form.email}</dd>
            <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Company</dt>
            <dd style={{ margin: 0, color: "var(--paper)" }}>{form.company}</dd>
            {form.role && (
              <>
                <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Role</dt>
                <dd style={{ margin: 0, color: "var(--paper)" }}>{form.role}</dd>
              </>
            )}
            {form.revenue && (
              <>
                <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Revenue</dt>
                <dd style={{ margin: 0, color: "var(--paper)" }}>{form.revenue}</dd>
              </>
            )}
            <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Looking for</dt>
            <dd style={{ margin: 0, color: "var(--paper)" }}>{form.help}</dd>
            <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Notes</dt>
            <dd style={{ margin: 0, color: "var(--paper)" }}>{form.message}</dd>
          </dl>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Contact</Eyebrow>
        <div style={{ marginTop: 32 }}>
          <Headline size="xxl" tag="h1">
            Tell us what you sell.
            <br />
            <span style={{ color: "var(--rust)" }}>We&apos;ll tell you straight.</span>
          </Headline>
        </div>
      </section>

      <section style={{ padding: "40px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Email or call</div>
              <a href="mailto:hello@taymarsolutions.com" style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "0.005em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--rust)", paddingBottom: 4, display: "inline-block" }}>
                hello@taymarsolutions.com
              </a>
              <div style={{ marginTop: 14 }}>
                <a href="tel:+15127668447" style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "0.02em", color: "var(--ink)", textDecoration: "none" }}>
                  (512) 766-8447
                </a>
              </div>
              <div style={{ marginTop: 12, fontFamily: "var(--body)", fontSize: 14, color: "var(--inkSoft)" }}>
                Goes to a real inbox. A rep or Ben (the founder) will reply, usually same day.
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Where we are</div>
              <div style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>
                Austin, TX.
                <br />
                Working with B2B clients across the US and Canada.
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>When we work</div>
              <div style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>
                Monday to Friday, 8a to 6p ET.
                <br />
                Slack with clients during those hours.
              </div>
            </div>
            <div style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", padding: 28 }}>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 16 }}>What happens next</div>
              <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "We reply within one business day. Sometimes faster.",
                  "30-minute discovery call on Zoom or phone, your choice.",
                  "If we’re a fit, we draft a commission structure on the spot. If not, we tell you why.",
                ].map((s, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 14, fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.55, color: "var(--paper)" }}>
                    <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 16, color: "var(--rust)", letterSpacing: "0.08em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
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
                  <option>$0 to $500k ARR</option>
                  <option>$500k to $2M ARR</option>
                  <option>$2M to $10M ARR</option>
                  <option>$10M+ ARR</option>
                </select>
              </Field>
            </div>
            <Field label="What do you need help with?">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {[
                  ["outreach", "Cold outreach"],
                  ["qualification", "Qualification"],
                  ["appointments", "Appointment setting"],
                ].map(([v, l]) => (
                  <label
                    key={v}
                    style={{
                      padding: "14px 16px",
                      border: "2px solid " + (form.help === v ? "var(--ink)" : "var(--line)"),
                      background: form.help === v ? "var(--ink)" : "transparent",
                      color: form.help === v ? "var(--paper)" : "var(--ink)",
                      fontFamily: "var(--display)",
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
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
                placeholder="What do you sell, who buys it, and what’s your average deal size? Anything else we should know."
                style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--body)" }}
              />
            </Field>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, gap: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                We don&apos;t share your details. Period.
              </span>
              <button
                type="submit"
                style={{
                  background: "var(--rust)",
                  color: "white",
                  border: "2px solid var(--rust)",
                  padding: "20px 36px",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: 16,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  lineHeight: 1,
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
