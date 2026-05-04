import { CtaBlock, Eyebrow, Placeholder } from "@/components/site/atoms";

export const metadata = {
  title: "About | Taymar Solutions",
  description: "Outbound, rebuilt around accountability.",
};

export default function AboutPage() {
  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="01">About Taymar</Eyebrow>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 300, margin: "32px 0 0", maxWidth: 1100 }}>
          Outbound, rebuilt around <em style={{ color: "var(--accent)" }}>accountability</em>.
        </h1>
      </section>

      <section style={{ padding: "60px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
          <div>
            <div style={{ position: "relative", width: "100%", maxWidth: 360, aspectRatio: "3/4", borderRadius: 6, overflow: "hidden" }}>
              <img src="/founder.jpg" alt="Ben Marchiony, Founder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ marginTop: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
              Ben Marchiony · Founder · Austin, TX
            </div>
          </div>
          <div>
            <Eyebrow num="02">Why we exist</Eyebrow>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: 28, lineHeight: 1.35, fontWeight: 300, letterSpacing: "-0.015em", margin: "24px 0 0", color: "var(--ink)" }}>
              The outbound industry has a trust problem. Agencies sell hours, decks, and &ldquo;strategy&rdquo; — then disappear when the calls don&apos;t come. Founders end up paying for activity instead of outcomes.
            </p>
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--muted)", marginTop: 32, maxWidth: 640 }}>
              Taymar Solutions exists to flip that arrangement. We carry the risk, we run the playbook, and we get paid when meetings land. It&apos;s a simpler relationship — and it forces us to be honest about who we can actually help.
            </p>
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--muted)", marginTop: 20, maxWidth: 640 }}>
              We work with founders, sales leaders, and operators who want pipeline without payroll. The model is simple: align the incentives, and the rest follows.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "120px 40px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow num="03">How we operate</Eyebrow>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.025em", fontWeight: 300, margin: "24px 0 64px" }}>
            Four working principles.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48 }}>
            {[
              ["Client-centered, not deck-centered", "We don't build a 60-slide strategy and call it a project. We build a list, a script, and a calendar that fills."],
              ["Transparent reporting, weekly", "Dials, contacts, conversations, meetings. The same numbers we look at internally show up in your inbox every Friday."],
              ["Pick your fights", "Outbound isn't right for every offer. We tell you up front when it isn't — and what to fix before we start."],
              ["Conversations, not scripts", "Reps work from frameworks, not word-for-word scripts. The goal is a real exchange that earns the next 30 minutes."],
            ].map(([t, b], i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")} / 04</span>
                <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 30, fontWeight: 400, letterSpacing: "-0.02em", margin: 0 }}>{t}</h3>
                <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="04">A short history</Eyebrow>
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column" }}>
          {[
            ["2024", "Q1", "Founded in Tampa with a single SDR and one client in B2B SaaS."],
            ["2024", "Q3", "Expanded to multi-channel outreach. First six-figure pipeline win for a client."],
            ["2025", "Q1", "Team grows to five reps. Standardized commission-first model rolled out across all engagements."],
            ["2025", "Q4", "Clients across 38 verticals. Internal CRM and reporting platform built in-house."],
            ["2026", "Now", "Working with founders, sales leaders, and operators who want pipeline without payroll."],
          ].map(([yr, q, body], i) => (
            <div
              key={i}
              style={{
                padding: "28px 0",
                borderTop: "1px solid var(--line)",
                borderBottom: i === 4 ? "1px solid var(--line)" : "none",
                display: "grid",
                gridTemplateColumns: "120px 80px 1fr",
                gap: 40,
                alignItems: "baseline",
              }}
            >
              <span style={{ fontFamily: "'Newsreader', serif", fontSize: 36, fontWeight: 300, letterSpacing: "-0.02em" }}>{yr}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em" }}>{q}</span>
              <span style={{ fontFamily: "'Geist', sans-serif", fontSize: 17, lineHeight: 1.5, color: "var(--ink)" }}>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
