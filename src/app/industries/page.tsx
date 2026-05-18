"use client";
import { useState } from "react";
import { CtaBlock, Eyebrow, Headline } from "@/components/site/atoms";

const industries = [
  {
    name: "B2B SaaS & Tech",
    needs: "Pipeline volume, fast feedback on ICP shifts, AE calendars filled with the right segment.",
    solutions: "Tightly-scoped ICP lists, technical messaging built with your CS team, rapid A/B on positioning angles.",
    note: "We currently work with two SaaS clients: one in supply chain, one in dev tools.",
  },
  {
    name: "Professional Services",
    needs: "Qualified introductions to decision-makers without spending six months building a referral network.",
    solutions: "LinkedIn-led outreach, executive-tone copy, discovery frameworks tuned to long, relationship-driven cycles.",
    note: "Long cycles, low volume, high contract value. The model fits if you can take three months of patience.",
  },
  {
    name: "Financial & Insurance",
    needs: "Compliance-aware outreach, careful list hygiene, conversations that build trust before pitching anything.",
    solutions: "Reviewed scripts, suppression-list management, qualification rubrics aligned with your compliance team.",
    note: "We will not run outreach for crypto, retail trading platforms, or anything regulated as a security.",
  },
  {
    name: "Construction & Trades",
    needs: "Reach into operations and procurement contacts who don’t sit in a CRM and rarely answer email.",
    solutions: "Phone-led outreach with disciplined follow-up, geo-segmented list building from licensing and permit data.",
    note: "Phone first. Email second. LinkedIn rarely. The buyers are on job sites, not on Sales Navigator.",
  },
  {
    name: "Healthcare Services",
    needs: "Practice-administrator and clinical-buyer access without burning credibility on bad timing or wrong contacts.",
    solutions: "Decision-mapping per facility type, HIPAA-safe data handling, conversation frameworks built around outcomes.",
    note: "We don’t do anything patient-facing. We sell to admins, ops, and procurement.",
  },
  {
    name: "Logistics & Supply Chain",
    needs: "Direct reach into shippers, 3PLs, and ops leaders during a market that’s moving every quarter.",
    solutions: "Multi-channel sequences with operational hooks, lane-specific list segmentation, quarterly ICP refreshes.",
    note: "Our longest-running client is a 3PL. We know the buyer titles.",
  },
];

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  const ind = industries[active];
  return (
    <div>
      <section style={{ padding: "80px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Industries</Eyebrow>
        <div style={{ marginTop: 32 }}>
          <Headline size="xxl" tag="h1">
            Where the model
            <br />
            <span style={{ color: "var(--rust)" }}>actually works.</span>
          </Headline>
        </div>
        <p style={{ fontFamily: "var(--body)", fontSize: 20, lineHeight: 1.55, color: "var(--inkSoft)", maxWidth: 760, marginTop: 40 }}>
          Outbound isn’t one motion. The list, the script, and the cadence change with the buyer. These are the six verticals where we’ve built repeatable playbooks, and the kind of work we typically run.
        </p>
      </section>

      <section style={{ padding: "60px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "3px solid var(--ink)" }}>
            {industries.map((i, idx) => {
              const on = active === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  style={{
                    textAlign: "left",
                    padding: "28px 0",
                    background: "none",
                    border: "none",
                    borderBottom: idx === industries.length - 1 ? "3px solid var(--ink)" : "1px solid var(--line)",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 20,
                    alignItems: "center",
                    color: on ? "var(--ink)" : "var(--muted)",
                    transition: "color 180ms",
                  }}
                >
                  <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 18, color: on ? "var(--rust)" : "var(--muted)", letterSpacing: "0.06em" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "0.005em", textTransform: "uppercase", lineHeight: 1 }}>
                    {i.name}
                  </span>
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      border: "2px solid " + (on ? "var(--rust)" : "var(--line)"),
                      background: on ? "var(--rust)" : "transparent",
                      display: "inline-block",
                    }}
                  />
                </button>
              );
            })}
          </div>
          <div style={{ position: "sticky", top: 100 }}>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14 }}>
                Typical needs
              </div>
              <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.1, letterSpacing: "-0.005em", textTransform: "uppercase", margin: 0, color: "var(--ink)" }}>
                {ind.needs}
              </p>
            </div>
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 14 }}>
                How we solve it
              </div>
              <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>{ind.solutions}</p>
            </div>
            <div style={{ marginTop: 40, padding: "24px 28px", background: "var(--ink)", color: "var(--paper)" }}>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 10 }}>
                Honest note
              </div>
              <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.5, fontWeight: 500, color: "var(--paper)", margin: 0 }}>
                {ind.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paperRaised)", padding: "100px 40px", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <Eyebrow>Why we fit</Eyebrow>
          <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.005em", textTransform: "uppercase", margin: 0, color: "var(--ink)" }}>
            We&apos;re industry-agnostic on paper. In practice, we earn our keep when there&apos;s a real human buyer, a meaningful contract, and a sales team ready to take the calls. Don&apos;t see your vertical? Tell us what you sell. We&apos;ll tell you straight if it&apos;s a fit.
          </p>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
