import { CtaBlock, Eyebrow, Placeholder } from "@/components/site/atoms";

export const metadata = {
  title: "Services | Taymar Solutions",
  description: "A small surface area, deeply executed.",
};

const services = [
  {
    n: "01",
    title: "Cold Outreach",
    tag: "Multi-channel",
    body: "We design and run outbound sequences that feel like a real person reached out, because one did. Phone, email, and LinkedIn — orchestrated together, not in silos.",
    deliverables: [
      "ICP and target list build (500–2,500 contacts/mo)",
      "Channel-specific messaging frameworks",
      "Sequenced cadences across phone / email / LinkedIn",
      "A/B testing on subject lines and opening lines",
      "Weekly volume + reply-rate reporting",
    ],
    right: "img-outreach",
  },
  {
    n: "02",
    title: "Lead Qualification",
    tag: "Filter & frame",
    body: "Replies and dials don't matter if the meetings are bad. Every prospect runs through a qualification framework so your team only sees opportunities that match the criteria you set.",
    deliverables: [
      "BANT or custom qualification rubric",
      "Discovery call scripts and objection trees",
      "Lead scoring and disposition tracking",
      "CRM updates with full conversation context",
      "Reject-and-recycle workflows for early-stage leads",
    ],
    right: "img-qual",
  },
  {
    n: "03",
    title: "Appointment Setting",
    tag: "Calendar-ready",
    body: "Booked meetings, on your calendar, with prep notes attached. Your reps walk in warm — never reading a brief two minutes before the call.",
    deliverables: [
      "Calendar integration with your tools (Google / Outlook / HubSpot)",
      "Pre-call briefs delivered 24h ahead",
      "Reschedule and no-show recovery sequences",
      "Show-rate optimization (typical: 78–85%)",
      "Handoff process tuned to your sales motion",
    ],
    right: "img-cal",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="01">Services</Eyebrow>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 300, margin: "32px 0 32px", maxWidth: 1100 }}>
          A small surface area, deeply executed.
        </h1>
        <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 720 }}>
          We don&apos;t sell strategy decks, branding sprints, or marketing automation. We do three things — and we do them on a commission-first basis. Here&apos;s exactly what each one looks like.
        </p>
      </section>

      {services.map((s, i) => (
        <section key={i} style={{ padding: "100px 40px", borderTop: "1px solid var(--line)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.12em" }}>{s.n}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "4px 10px", border: "1px solid var(--line)", borderRadius: 999, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {s.tag}
                </span>
              </div>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(48px, 5.5vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", fontWeight: 300, margin: 0 }}>{s.title}</h2>
              <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--muted)", marginTop: 32, maxWidth: 540 }}>{s.body}</p>
            </div>
            <div>
              <Placeholder label={s.right} aspect="4/3" />
              <div style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>Deliverables</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {s.deliverables.map((d, j) => (
                    <li key={j} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, fontFamily: "'Geist', sans-serif", fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>
                      <span style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}>—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: "var(--ink)", color: "var(--bg)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <Eyebrow num="04">Good fit if you are</Eyebrow>
              <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "A founder or sales leader at a B2B company with $20k+ ACV",
                  "Validating a new offer and need real-market signal fast",
                  "Already have product-market fit but lack pipeline volume",
                  "Tired of agencies who charge whether or not the phone rings",
                  "Selling something that benefits from a real human conversation",
                ].map((it, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "start" }}>
                    <span style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace", fontSize: 14, marginTop: 4 }}>✓</span>
                    <span style={{ fontFamily: "'Newsreader', serif", fontSize: 22, lineHeight: 1.4, fontWeight: 300, color: "var(--bg)" }}>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow num="05">Probably not a fit if</Eyebrow>
              <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "Your offer is consumer-facing or transactional",
                  "Your average deal size is under $5k and demands volume only",
                  "You don't yet have a sales person to take qualified meetings",
                  "You need brand, content, or paid-media work — not outbound",
                  "You're not ready to take 5–15 booked meetings per month",
                ].map((it, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "start" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace", fontSize: 14, marginTop: 4 }}>✕</span>
                    <span style={{ fontFamily: "'Newsreader', serif", fontSize: 22, lineHeight: 1.4, fontWeight: 300, color: "rgba(255,255,255,0.7)" }}>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock variant="services" />
    </div>
  );
}
