import { Btn, CtaBlock, Eyebrow, Headline } from "@/components/site/atoms";

export const metadata = {
  title: "About | Taymar Solutions",
  description: "Outbound, rebuilt around accountability.",
};

export default function AboutPage() {
  return (
    <div>
      <section data-pad-x style={{ padding: "80px 40px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>About</Eyebrow>
        <div style={{ marginTop: 32 }}>
          <Headline size="xxl" tag="h1">
            Small team.
            <br />
            <span style={{ color: "var(--rust)" }}>Austin, TX.</span>
            <br />
            Paid on meetings.
          </Headline>
        </div>
      </section>

      <section data-pad-x style={{ padding: "60px 40px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <aside data-sticky style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "36px 32px", position: "relative" }}>
              <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 20 }}>
                Founder note
              </div>
              <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.55, fontWeight: 400, color: "var(--paper)", margin: 0 }}>
                Hi, I&apos;m Ben. Before Taymar I ran outbound at three agencies that billed me whether or not we hit a number. The third one charged $14k a month and delivered nine meetings that quarter. Two of them showed.
              </p>
              <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.55, fontWeight: 400, color: "var(--paper)", margin: "16px 0 0" }}>
                The week I quit, I sat down and wrote out what I would have actually paid for. That document is now the engagement model on the services page.
              </p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.18)", fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
Ben Marchiony · Founder · Austin, TX · Est. 2024
              </div>
            </div>
            <div style={{ marginTop: 24, fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.6, color: "var(--inkSoft)" }}>
              Drop a line if you want to chat before booking a call:
              <br />
              <a href="mailto:hello@taymarsolutions.com" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                hello@taymarsolutions.com
              </a>
            </div>
          </aside>
          <div>
            <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.005em", textTransform: "uppercase", margin: 0, color: "var(--ink)" }}>
              The outbound industry has a trust problem.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.65, color: "var(--inkSoft)", marginTop: 32, maxWidth: 640 }}>
              Agencies sell hours, decks, and “strategy,” then disappear when the calls don’t come. Founders end up paying for activity instead of outcomes.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.65, color: "var(--inkSoft)", marginTop: 20, maxWidth: 640 }}>
              Taymar exists to flip that arrangement. We carry the risk, we run the playbook, and we get paid when meetings land. It’s a simpler relationship. It forces us to be honest about who we can actually help.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.65, color: "var(--inkSoft)", marginTop: 20, maxWidth: 640 }}>
              We started in 2024 with two clients: a Series A SaaS company and a commercial roofing firm. Both are still with us. The team is five reps now. The model hasn’t changed: align the incentives, and the rest follows.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.65, color: "var(--ink)", marginTop: 20, maxWidth: 640, fontWeight: 500 }}>
              We don’t use AI agents. We don’t spin up burner LinkedIn accounts. We don’t send templated emails to 50,000 people and call it “at-scale outbound.” A person on our team reads every list, writes every opener, and dials every number.
            </p>
          </div>
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ padding: "100px 40px", borderTop: "3px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start" }}>
            <div>
              <Eyebrow>How we work</Eyebrow>
              <div style={{ marginTop: 24 }}>
                <Headline size="lg" tag="h2">
                  Four sentences.
                  <br />
                  <span style={{ color: "var(--rust)" }}>That&apos;s the playbook.</span>
                </Headline>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["No deck-first projects", "We don’t open with a 60-slide strategy. We open with a list of 300 contacts and a draft script. You react to those. We adjust. We start dialing."],
                ["Weekly Friday email", "Dials, conversations, meetings, no-shows. Same numbers we look at internally. If a week looked bad, you’ll see it before you ask."],
                ["We tell you when to stop", "Outbound isn’t right for every offer. If the early signals are wrong, we say so. We’d rather end an engagement than burn a quarter pretending."],
                ["Frameworks, not scripts", "Reps work from a structure, not a recitation. The goal is a real exchange that earns the next 30 minutes. Robots don’t book meetings."],
              ].map(([t, b], i, arr) => (
                <div
                  key={i}
                  data-num-row
                  style={{
                    padding: "36px 0",
                    borderTop: "1px solid var(--line)",
                    borderBottom: i === arr.length - 1 ? "1px solid var(--line)" : "none",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 32,
                    alignItems: "baseline",
                  }}
                >
                  <span data-col-num style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 40, color: "var(--rust)", letterSpacing: "-0.01em", lineHeight: 0.9 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(24px, 2.4vw, 32px)", letterSpacing: "0.005em", textTransform: "uppercase", margin: 0, lineHeight: 1 }}>
                      {t}
                    </h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.6, color: "var(--inkSoft)", margin: "12px 0 0", maxWidth: 640 }}>
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>Timeline</Eyebrow>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", borderTop: "3px solid var(--ink)" }}>
          {[
            ["2024", "Spring", "Founded in Austin by Ben Marchiony. One rep, one client (a Series A SaaS in supply chain)."],
            ["2024", "Fall", "Added phone-led outreach to the email-and-LinkedIn motion. First six-figure pipeline win for a client."],
            ["2025", "Spring", "Hired reps two and three. Standardized commission-first pricing across all engagements."],
            ["2025", "Fall", "Built internal CRM and reporting (the Friday email gets sent from it). Reps four and five join."],
            ["2026", "Now", "Working with founders, sales leaders, and operators who want pipeline without payroll. Not taking new clients in March until current commitments are met."],
          ].map(([yr, q, body], i, arr) => (
            <div
              key={i}
              data-timeline-row
              style={{
                padding: "32px 0",
                borderBottom: i === arr.length - 1 ? "3px solid var(--ink)" : "1px solid var(--line)",
                display: "grid",
                gridTemplateColumns: "140px 120px 1fr",
                gap: 40,
                alignItems: "baseline",
              }}
            >
              <span data-col-yr style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 48, letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 0.9 }}>{yr}</span>
              <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", color: "var(--rust)", textTransform: "uppercase" }}>{q}</span>
              <span data-col-body style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 720 }}>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
