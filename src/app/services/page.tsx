import { CtaBlock, Eyebrow, Headline } from "@/components/site/atoms";

export const metadata = {
  title: "Services | Taymar Solutions",
  description: "Three things we do. Here’s what each costs you, and what you get back.",
};

const services = [
  {
    n: "01",
    title: "Cold Outreach",
    tag: "Multi-channel",
    body:
      "We design and run outbound sequences that read like one person reached out, because one did. Phone Tuesday, email Wednesday, LinkedIn Friday. Not silos. A rhythm.",
    deliverables: [
      "ICP and target list build (600–2,400 contacts/mo)",
      "Channel-specific opener frameworks (we draft, you red-line)",
      "Sequenced cadences across phone / email / LinkedIn",
      "A/B testing on openers (we keep what beats baseline)",
      "Weekly volume + reply-rate report, every Friday",
    ],
    detail: { label: "Typical reply rate", value: "6 – 11%" },
  },
  {
    n: "02",
    title: "Lead Qualification",
    tag: "Filter & frame",
    body:
      "Replies and dials don’t matter if the meetings are wrong. Every prospect runs through your criteria before they reach your calendar. Bad-fit leads get told that, kindly, in writing.",
    deliverables: [
      "BANT or custom qualification rubric (yours, not ours)",
      "Discovery openers and objection trees, written for you",
      "Lead scoring + disposition tracking in your CRM",
      "Conversation transcripts attached to every CRM record",
      "Reject-and-recycle workflows for early-stage leads",
    ],
    detail: { label: "Bad-fit reject rate", value: "≈ 1 in 3" },
  },
  {
    n: "03",
    title: "Appointment Setting",
    tag: "Calendar-ready",
    body:
      "A calendar invite, plus a one-page brief sent to your rep 24 hours before the call. They walk in with context. The buyer doesn’t hear “remind me what you do again?”",
    deliverables: [
      "Calendar integration (Google / Outlook / HubSpot)",
      "Pre-call brief with buyer, role, problem, and opener",
      "Reschedule + no-show recovery sequences",
      "Show-rate measured weekly (we target 78%+)",
      "Handoff tuned to your sales motion, not ours",
    ],
    detail: { label: "Target show rate", value: "78 – 85%" },
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section data-pad-x style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Services</Eyebrow>
        <div style={{ marginTop: 32 }}>
          <Headline size="xxl" tag="h1">
            Three things.
            <br />
            <span style={{ color: "var(--rust)" }}>Priced honest.</span>
          </Headline>
        </div>
        <p style={{ fontFamily: "var(--body)", fontSize: 20, lineHeight: 1.55, color: "var(--inkSoft)", maxWidth: 720, marginTop: 40 }}>
          We don’t sell strategy decks, brand sprints, or marketing automation. We don’t sell AI agents. We do three things on a commission-first basis. Here’s what each one looks like in practice.
        </p>
      </section>

      {services.map((s, i) => (
        <section key={i} data-pad-x data-pad-y style={{ padding: "100px 40px", borderTop: "3px solid var(--ink)" }}>
          <div data-stack style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 14, letterSpacing: "0.14em", color: "var(--rust)" }}>{s.n}</span>
                <span style={{ width: 24, height: 2, background: "var(--ink)" }} />
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, padding: "4px 12px", border: "2px solid var(--ink)", color: "var(--ink)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {s.tag}
                </span>
              </div>
              <Headline size="xl" tag="h2">{s.title}</Headline>
              <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.6, color: "var(--inkSoft)", marginTop: 32, maxWidth: 540 }}>
                {s.body}
              </p>

              <div style={{ marginTop: 48, padding: "28px 32px", background: "var(--ink)", color: "var(--paper)", maxWidth: 460, display: "flex", alignItems: "center", gap: 32 }}>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                    {s.detail.label}
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 44, letterSpacing: "-0.005em", color: "var(--paper)", lineHeight: 0.95 }}>
                    {s.detail.value}
                  </div>
                </div>
                <div style={{ width: 4, height: 56, background: "var(--rust)" }} />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 24 }}>What you get</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                {s.deliverables.map((d, j) => (
                  <li
                    key={j}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "44px 1fr",
                      gap: 16,
                      padding: "20px 0",
                      borderTop: j === 0 ? "3px solid var(--ink)" : "1px solid var(--line)",
                      borderBottom: j === s.deliverables.length - 1 ? "3px solid var(--ink)" : "none",
                      fontFamily: "var(--body)",
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "var(--ink)",
                      alignItems: "baseline",
                    }}
                  >
                    <span style={{ color: "var(--rust)", fontFamily: "var(--display)", fontWeight: 800, fontSize: 16, letterSpacing: "0.08em" }}>
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section data-pad-x data-pad-y-lg style={{ background: "var(--ink)", color: "var(--paper)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <Eyebrow tone="dark">Good fit</Eyebrow>
              <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  "A founder or sales leader at a B2B company with $20k+ ACV",
                  "Validating a new offer, want real-market signal in 6 weeks",
                  "Already have product-market fit but lack pipeline volume",
                  "Tired of agencies who invoice whether or not the phone rings",
                  "Selling something that benefits from an actual conversation",
                ].map((it, i, arr) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "32px 1fr",
                      gap: 16,
                      alignItems: "baseline",
                      padding: "20px 0",
                      borderTop: "1px solid rgba(255,255,255,0.16)",
                      borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.16)" : "none",
                    }}
                  >
                    <span style={{ color: "var(--rust)", fontFamily: "var(--display)", fontWeight: 800, fontSize: 20 }}>✓</span>
                    <span style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.5, color: "var(--paper)" }}>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow tone="dark">Probably not</Eyebrow>
              <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  "Your offer is consumer-facing or transactional",
                  "Average deal size under $5k, you need pure volume",
                  "No sales person yet to take the qualified meetings",
                  "You need brand, content, or paid-media work, not outbound",
                  "You can’t absorb 5–15 booked meetings per month",
                ].map((it, i, arr) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "32px 1fr",
                      gap: 16,
                      alignItems: "baseline",
                      padding: "20px 0",
                      borderTop: "1px solid rgba(255,255,255,0.16)",
                      borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.16)" : "none",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--display)", fontWeight: 800, fontSize: 20 }}>✕</span>
                    <span style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,0.7)" }}>{it}</span>
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
