"use client";
import { useState } from "react";
import { CtaBlock, Eyebrow, Placeholder } from "@/components/site/atoms";

const industries = [
  { name: "B2B SaaS & Tech", needs: "Pipeline volume, fast feedback on ICP shifts, and AE calendars filled with the right segment.", solutions: "Tightly-scoped ICP lists, technical messaging built with your CS team, and rapid A/B on positioning angles." },
  { name: "Professional Services", needs: "Qualified introductions to decision-makers without spending months building a referral network from scratch.", solutions: "LinkedIn-led outreach, executive-tone copy, and discovery frameworks tuned to long, relationship-driven cycles." },
  { name: "Financial & Insurance", needs: "Compliance-aware outreach, careful list hygiene, and conversations that build trust before pitching anything.", solutions: "Reviewed scripts, suppression-list management, and qualification rubrics aligned with your compliance team." },
  { name: "Construction & Trades", needs: "Reach into operations and procurement contacts who don't sit in a CRM and rarely answer email.", solutions: "Phone-led outreach with disciplined follow-up, plus geo-segmented list building from licensing and permit data." },
  { name: "Healthcare Services", needs: "Practice-administrator and clinical-buyer access without burning credibility on bad timing or wrong contacts.", solutions: "Decision-mapping per facility type, HIPAA-safe data handling, and conversation frameworks built around outcomes." },
  { name: "Logistics & Supply Chain", needs: "Direct reach into shippers, 3PLs, and ops leaders during a market that's moving every quarter.", solutions: "Multi-channel sequences with operational hooks, lane-specific list segmentation, and quarterly ICP refreshes." },
];

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="01">Industries</Eyebrow>
        <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 300, margin: "32px 0 32px" }}>
          Where the model <em style={{ color: "var(--accent)" }}>actually works</em>.
        </h1>
        <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 720 }}>
          Outbound isn&apos;t one motion. The list, the script, and the cadence change with the buyer. These are the verticals where we&apos;ve built repeatable playbooks — and the kind of needs we typically solve for.
        </p>
      </section>

      <section style={{ padding: "60px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--ink)" }}>
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  textAlign: "left",
                  padding: "24px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--line)",
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 24,
                  alignItems: "center",
                  color: active === i ? "var(--ink)" : "var(--muted)",
                  transition: "color 200ms",
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: active === i ? "var(--accent)" : "var(--muted)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "'Newsreader', serif", fontSize: 26, fontWeight: 400, letterSpacing: "-0.015em" }}>{ind.name}</span>
                <span style={{ fontSize: 16 }}>{active === i ? "●" : "○"}</span>
              </button>
            ))}
          </div>
          <div style={{ position: "sticky", top: 100 }}>
            <Placeholder label={`industry — ${industries[active].name.toLowerCase()}`} aspect="4/3" />
            <div style={{ marginTop: 40 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Typical needs</div>
              <p style={{ fontFamily: "'Newsreader', serif", fontSize: 22, lineHeight: 1.45, fontWeight: 300, letterSpacing: "-0.01em", margin: 0 }}>{industries[active].needs}</p>
            </div>
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>How we solve it</div>
              <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>{industries[active].solutions}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "100px 40px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <Eyebrow num="02">Why we fit</Eyebrow>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.25, letterSpacing: "-0.02em", fontWeight: 300, margin: 0 }}>
            We&apos;re industry-agnostic on paper, but in practice we earn our keep when there&apos;s a <em style={{ color: "var(--accent)" }}>real human buyer</em>, a meaningful contract value, and a sales team ready to take the calls. Don&apos;t see your vertical? Tell us what you&apos;re selling — we&apos;ll tell you straight if it&apos;s a fit.
          </p>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
